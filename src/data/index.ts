// ───────────────────────────────────────────────
// 测试套件注册表 —— 统一入口
// 新增测试类型只需: 1. 在 tests/ 下新建数据文件 2. 在此处引入并注册
// ───────────────────────────────────────────────
import type { TestSuite } from './types'
import { personalityTest } from './tests/personality'
import { debugTest } from './tests/debug'
import { chaosTest } from './tests/chaos'

/** 所有已注册的测试套件 */
export const TEST_REGISTRY: TestSuite[] = [
  debugTest,
  personalityTest,
  chaosTest,
  // 后续可继续追加:
  // psychologicalTest,
  // careerTest,
]

/** 按 id 获取指定套件 */
export function getTestById(id: string): TestSuite | undefined {
  return TEST_REGISTRY.find(suite => suite.id === id)
}

export type { TestSuite } from './types'
export * from './types'
