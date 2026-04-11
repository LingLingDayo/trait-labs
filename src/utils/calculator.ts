import type { TestSuite, PersonalityResult } from '../data/types'

export interface RadarDataPoint {
  dimension: string
  score: number
  maxScore: number
  label: string
}

export interface MatchResult {
  result: PersonalityResult
  matchRate: number // 绝对契合度 (0~1)
}

export interface TestAnalysis {
  dimensionScores: Record<string, number>
  radarData: RadarDataPoint[]
  matches: MatchResult[]
  primaryResult: PersonalityResult | null
}

/**
 * 聚合用户的选择计算各个维度的最终得分
 * @param answers 用户的回答记录 (questionId -> optionId)
 * @param testSuite 当前的测试套件元数据
 */
export function calculateDimensionScores(
  answers: Record<string, string>,
  testSuite: TestSuite
): Record<string, number> {
  const scores: Record<string, number> = {}
  
  // 初始化分数
  for (const dim of testSuite.dimensions) {
    scores[dim.key] = 0
  }

  // 遍历每道题的作答选项，累加对应维度的得分
  for (const question of testSuite.questions) {
    const selectedOptionId = answers[question.id]
    if (!selectedOptionId) continue

    const selectedOption = question.options.find(o => o.id === selectedOptionId)
    if (!selectedOption) continue

    for (const [dimKey, score] of Object.entries(selectedOption.scores)) {
      if (scores[dimKey] !== undefined) {
        scores[dimKey] += score
      }
    }
  }

  return scores
}

/**
 * 计算测试在各维度的理论最高分
 */
export function calculateMaxPossibleScores(testSuite: TestSuite): Record<string, number> {
  const maxScores: Record<string, number> = {}

  for (const dim of testSuite.dimensions) {
    maxScores[dim.key] = 0
  }

  for (const question of testSuite.questions) {
    // 假设每道题的选项针对某个维度所能拿到的最高分
    const dMax: Record<string, number> = {}
    for (const option of question.options) {
      for (const [dimKey, val] of Object.entries(option.scores)) {
        if (!dMax[dimKey] || val > dMax[dimKey]) {
          dMax[dimKey] = val
        }
      }
    }
    
    for (const [dimKey, val] of Object.entries(dMax)) {
      if (maxScores[dimKey] !== undefined) {
        maxScores[dimKey] += val
      }
    }
  }

  return maxScores
}

/**
 * 分析测试结果，生成维度分数，雷达图数据，以及概率契合度排序
 */
export function analyzeTestResult(
  answers: Record<string, string>,
  testSuite: TestSuite
): TestAnalysis {
  const dimensionScores = calculateDimensionScores(answers, testSuite)
  const maxScores = calculateMaxPossibleScores(testSuite)

  // 1. 生成用于渲染雷达图的数据
  const radarData: RadarDataPoint[] = testSuite.dimensions.map(dim => ({
    dimension: dim.key,
    label: dim.label,
    score: Math.min(dimensionScores[dim.key] || 0, maxScores[dim.key] || 1), // 防治超分边界
    maxScore: maxScores[dim.key] || 1
  }))

  // 2. 根据每种结论计算概率/契合度
  const matches: MatchResult[] = testSuite.results.map(result => {
    let totalFit = 0
    let ruleCount = 0

    // 处理每一条匹配规则，比如 { O: 18, C: 14 }
    for (const [dimKey, reqScore] of Object.entries(result.matchRules)) {
      const userScore = dimensionScores[dimKey] || 0
      const maxScore = maxScores[dimKey] || 1
      
      // 使用绝对差值计算距离，距离越小契合度越高
      const distance = Math.abs(userScore - reqScore)
      const fit = Math.max(0, 1 - (distance / maxScore))
      
      totalFit += fit
      ruleCount++
    }

    // 求该人格整体匹配度的加权平均
    const matchRate = ruleCount > 0 ? totalFit / ruleCount : 0.01

    return { result, matchRate }
  })

  // 按照契合度降序排序
  matches.sort((a, b) => b.matchRate - a.matchRate)

  const primaryResult = matches.length > 0 ? matches[0].result : null
  
  return {
    dimensionScores,
    radarData,
    matches,
    primaryResult
  }
}

/**
 * 根据每个结论的触发条件（matchRules）在整体分数域中的偏离度，
 * 计算出各结论的理论稀有度分布百分比
 */
export function calculateRarities(testSuite: TestSuite): Record<string, number> {
  const maxScores = calculateMaxPossibleScores(testSuite)
  const weights: Record<string, number> = {}
  let totalWeight = 0

  testSuite.results.forEach(result => {
    let difficultyScore = 0
    let ruleCount = 0

    // 计算达成该结论的难度系数 (距离中位数的偏离度)
    for (const [dimKey, reqScore] of Object.entries(result.matchRules)) {
      const maxScore = maxScores[dimKey] || 1
      // reqRatio 为 0~1 的比例
      const reqRatio = reqScore / maxScore
      // bias: 相对于中位数 0.5 的偏离率 (0 ~ 1)
      const bias = Math.abs(reqRatio - 0.5) / 0.5
      difficultyScore += bias * bias
      ruleCount++
    }

    // 使用指数衰减模拟正态分布，sigma = 0.8 用来调整陡峭程度
    // 如果没有条件规则(保底结论)，难度偏离就是 0，权重最大(1.0)
    // 偏离越大，权重越低，表示概率越小
    const sigma = 0.8
    const weight = Math.exp(-difficultyScore / sigma)
    
    weights[result.id] = weight
    totalWeight += weight
  })

  // 归一化为百分比
  const rarities: Record<string, number> = {}
  for (const [id, weight] of Object.entries(weights)) {
    rarities[id] = (weight / totalWeight) * 100
  }

  return rarities
}
