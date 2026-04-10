import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getTestById } from '../data'
import { analyzeTestResult, type TestAnalysis } from '../utils/calculator'
import type { Question, TestSuite, PersonalityResult } from '../data/types'

export const useTestStore = defineStore('testStore', () => {
  const activeTestId = ref<string | null>(null)
  const answers = ref<Record<string, string>>({})
  const currentIndex = ref<number>(0)
  const debugResultOverride = ref<TestAnalysis | null>(null)
  
  // Getter: current active test suite
  const testSuite = computed<TestSuite | null>(() => {
    return activeTestId.value ? getTestById(activeTestId.value) || null : null
  })

  // Getter: total number of questions in current test
  const totalQuestions = computed<number>(() => {
    return testSuite.value?.questions.length || 0
  })

  // Getter: current question
  const currentQuestion = computed<Question | null>(() => {
    if (!testSuite.value || currentIndex.value >= totalQuestions.value) {
      return null
    }
    return testSuite.value.questions[currentIndex.value]
  })

  // Getter: progress bar (0~1)
  const progress = computed<number>(() => {
    if (totalQuestions.value === 0) return 0
    return currentIndex.value / totalQuestions.value
  })

  // Getter: check if we have finished answering
  const isFinished = computed<boolean>(() => {
    return totalQuestions.value > 0 && currentIndex.value >= totalQuestions.value
  })

  // Getter: computed result when finished
  const computedResult = computed<TestAnalysis | null>(() => {
    if (debugResultOverride.value) return debugResultOverride.value
    if (!isFinished.value || !testSuite.value) return null
    return analyzeTestResult(answers.value, testSuite.value)
  })

  // Actions
  function startTest(id: string) {
    activeTestId.value = id
    answers.value = {}
    currentIndex.value = 0
  }

  function answer(questionId: string, optionId: string) {
    // 记录答案
    answers.value[questionId] = optionId
    // 进行下一题
    if (currentIndex.value < totalQuestions.value) {
      currentIndex.value++
    }
  }

  function prevQuestion() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  function nextQuestion() {
    if (currentIndex.value < totalQuestions.value - 1) {
      const currentQId = currentQuestion.value?.id
      if (currentQId && answers.value[currentQId]) {
        currentIndex.value++
      }
    }
  }

  function reset() {
    activeTestId.value = null
    answers.value = {}
    currentIndex.value = 0
    debugResultOverride.value = null
  }

  function setDebugResult(testId: string, result: PersonalityResult) {
    activeTestId.value = testId
    const test = getTestById(testId)
    const fakeRadarData = test?.dimensions.map(d => ({
      dimension: d.key,
      label: d.label,
      score: Math.random() * 100,
      maxScore: 100
    })) || []
    
    const dimensionScores: Record<string, number> = {}
    test?.dimensions.forEach(d => {
      dimensionScores[d.key] = Math.random() * 100
    })

    debugResultOverride.value = {
      dimensionScores,
      primaryResult: result,
      radarData: fakeRadarData,
      matches: [{ result, matchRate: 1 }]
    }
  }

  return {
    activeTestId,
    answers,
    currentIndex,
    
    testSuite,
    totalQuestions,
    currentQuestion,
    progress,
    isFinished,
    computedResult,

    startTest,
    answer,
    prevQuestion,
    nextQuestion,
    reset,
    setDebugResult
  }
})
