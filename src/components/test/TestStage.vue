<script setup lang="ts">
import { ref, watch } from 'vue'
import Card from '../common/Card.vue'
import ProgressBar from './ProgressBar.vue'
import { useTestStore } from '../../stores/testStore'

const emit = defineEmits(['complete'])
const store = useTestStore()

// 用于本地视觉反馈的选中 ID
const selectedOptionId = ref<string | null>(null)
// 锁定点击，防止重复触发
const isTransitioning = ref(false)

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
  }, 400) // 延迟 400ms 喵
}
</script>

<template>
  <div class="flex-1 w-full flex flex-col px-6 pt-2 pb-6 animate-slide-up">
    <!-- 当正在答题时渲染 -->
    <div v-if="!store.isFinished && store.currentQuestion" class="flex-1 flex flex-col gap-4 pt-2">
      <!-- ProgressBar 接受 0~1 的进度, 由于 store progress 是小数，我们需要乘 100 -->
      <ProgressBar :progress="store.progress * 100" show-label />
      
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-slate-800 leading-normal">{{ store.currentQuestion.text }}</h2>
        
        <div class="space-y-3">
          <Card 
            v-for="option in store.currentQuestion.options" 
            :key="option.id"
            hoverable 
            padding="p-4" 
            class="border-2 transition-all duration-300"
            :class="[
              selectedOptionId === option.id 
                ? 'border-primary-500 bg-primary-50/50 shadow-md scale-[1.02]' 
                : 'border-transparent bg-white shadow-soft'
            ]"
            @click="onOptionSelect(option.id)"
          >
            <div class="flex items-center gap-3">
              <div 
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300"
                :class="[
                  selectedOptionId === option.id
                    ? 'border-primary-500 bg-primary-500 scale-110 shadow-sm'
                    : 'border-slate-200 bg-white'
                ]"
              >
                <Transition name="pop">
                  <div v-if="selectedOptionId === option.id" class="w-2 h-2 rounded-full bg-white"></div>
                </Transition>
              </div>
              <span 
                class="font-medium transition-colors duration-300"
                :class="selectedOptionId === option.id ? 'text-primary-800 scale-[1.01]' : 'text-slate-700'"
              >
                {{ option.label }}
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
