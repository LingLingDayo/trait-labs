<script setup lang="ts">
import { watch } from 'vue'
import Card from '../common/Card.vue'
import ProgressBar from './ProgressBar.vue'
import { useTestStore } from '../../stores/testStore'

const emit = defineEmits(['complete'])
const store = useTestStore()

// 当回答完毕时触发 complete 事件
watch(() => store.isFinished, (val) => {
  if (val) {
    emit('complete')
  }
})

const onOptionSelect = (optionId: string) => {
  if (!store.currentQuestion) return
  store.answer(store.currentQuestion.id, optionId)
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
            class="cursor-pointer border-2 border-transparent hover:border-primary-100"
            @click="onOptionSelect(option.id)"
          >
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0">
              </div>
              <span class="font-medium text-slate-700">{{ option.label }}</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
