<script setup lang="ts">
import { ref, watch } from 'vue'
import Card from '../common/Card.vue'
import ProgressBar from './ProgressBar.vue'
import ConfirmDialog from '../common/ConfirmDialog.vue'
import { useTestStore } from '../../stores/testStore'

const emit = defineEmits(['complete', 'restart'])
const store = useTestStore()

// 用于本地视觉反馈的选中 ID
const selectedOptionId = ref<string | null>(null)
// 锁定点击，防止重复触发
const isTransitioning = ref(false)
const showExitConfirm = ref(false)

// 当回答完毕时触发 complete 事件
watch(() => store.isFinished, (val) => {
  if (val) {
    emit('complete')
  }
})

const onOptionSelect = (optionId: string) => {
  if (!store.currentQuestion || isTransitioning.value) return
  
  // 1. 立即显示选中态
  selectedOptionId.value = optionId
  isTransitioning.value = true

  // 2. 延迟执行 store 逻辑，给用户视觉反馈时间
  setTimeout(() => {
    store.answer(store.currentQuestion!.id, optionId)
    // 重置状态
    selectedOptionId.value = null
    isTransitioning.value = false
  }, 400) // 延迟 400ms
}

const onBackHome = () => {
  showExitConfirm.value = true
}

const handleConfirmExit = () => {
  store.reset()
  emit('restart')
}
</script>

<template>
  <!-- 外层容器设为 100dvh 并锁定 hidden，禁止全局滚动 -->
  <div class="fixed inset-0 flex flex-col bg-slate-50 max-w-[480px] mx-auto overflow-hidden animate-slide-up">
    <!-- 顶部栏：返回按钮和进度条 -->
    <div class="px-6 pt-6 pb-2 flex items-center gap-4">
      <button 
        class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white border-2 border-slate-100 text-slate-500 shadow-sm transition-all active:scale-95" 
        @click="onBackHome"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <div class="flex-1">
        <ProgressBar :progress="store.progress * 100" show-label />
      </div>
    </div>

    <!-- 题目切换容器 -->
    <div class="flex-1 flex flex-col">
      <Transition name="slide-fade" mode="out-in">
        <div 
          v-if="!store.isFinished && store.currentQuestion" 
          :key="store.currentIndex"
          class="flex-1 flex flex-col"
        >
          <!-- 中间题目内容区：flex-1 并允许内部滚动以防长文本，居中展示 -->
          <div class="flex-1 flex flex-col justify-center px-6 overflow-y-auto scrollbar-hide">
            <div class="py-4">
              <h2 class="text-2xl font-bold text-slate-800 leading-tight">
                {{ store.currentQuestion.text }}
              </h2>
            </div>
          </div>

          <!-- 底部选项区：随题目一起切换 -->
          <div class="w-full bg-transparent px-6 pt-4 pb-6 space-y-3">
            <Card 
              v-for="option in store.currentQuestion.options" 
              :key="option.id"
              hoverable 
              padding="p-4" 
              class="border-2 transition-all duration-300"
              :class="[
                (selectedOptionId || store.answers[store.currentQuestion.id]) === option.id
                  ? 'border-primary-500 bg-primary-50/50' 
                  : 'border-slate-100 bg-white'
              ]"
              @click="onOptionSelect(option.id)"
            >
              <div class="flex items-center gap-3">
                <div 
                  class="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300"
                  :class="[
                    (selectedOptionId || store.answers[store.currentQuestion.id]) === option.id
                      ? 'border-primary-500 bg-primary-500 scale-110'
                      : 'border-slate-200 bg-white'
                  ]"
                >
                  <Transition name="pop">
                    <div v-if="(selectedOptionId || store.answers[store.currentQuestion.id]) === option.id" class="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </Transition>
                </div>
                <span 
                  class="font-medium transition-colors duration-300"
                  :class="(selectedOptionId || store.answers[store.currentQuestion.id]) === option.id ? 'text-primary-800' : 'text-slate-700'"
                >
                  {{ option.label }}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Transition>
    </div>

    <!-- 底部导航切换功能：移出 Transition，保持静态 -->
    <div v-if="!store.isFinished && store.currentQuestion" class="w-full bg-transparent px-6 pt-0 pb-6">
      <div class="flex items-center justify-between gap-4">
        <button 
          class="flex-1 py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale"
          :class="store.currentIndex > 0 ? 'bg-slate-100 text-slate-600' : 'text-transparent bg-transparent pointer-events-none'"
          :disabled="store.currentIndex <= 0"
          @click="store.prevQuestion()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span class="font-bold text-sm">上一题</span>
        </button>

        <div class="text-slate-300 text-xs font-medium w-20 text-center tabular-nums shrink-0">
          {{ store.currentIndex + 1 }} / {{ store.totalQuestions }}
        </div>

        <button 
          class="flex-1 py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-30"
          :class="store.answers[store.currentQuestion.id] ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-300'"
          :disabled="!store.answers[store.currentQuestion.id] || store.currentIndex >= store.totalQuestions - 1"
          @click="store.nextQuestion()"
        >
          <span class="font-bold text-sm">下一题</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>

    <!-- 退出确认弹窗 -->
    <ConfirmDialog 
      v-model:show="showExitConfirm"
      title="确认离开？"
      message="当前进度将不会保存，确定要返回首页吗？"
      confirm-text="确定离开"
      cancel-text="继续答题"
      @confirm="handleConfirmExit"
    />
  </div>
</template>

<style scoped>
/* 题目切换动画 */
.slide-fade-enter-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(0.4, 0, 1, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.pop-enter-active {
  animation: pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pop-leave-active {
  animation: pop-in 0.2s reverse cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
