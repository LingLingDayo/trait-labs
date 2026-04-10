import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getTestById } from '../data'
import { analyzeTestResult, type TestAnalysis } from '../utils/calculator'
import type { Question, TestSuite } from '../data/types'

export const useTestStore = defineStore('testStore', () => {
  const activeTestId = ref<string | null>(null)
  const answers = ref<Record<string, string>>({})
  const currentIndex = ref<number>(0)
  
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

  function reset() {
    activeTestId.value = null
    answers.value = {}
    currentIndex.value = 0
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
    reset
  }
})
