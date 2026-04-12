<script setup lang="ts">
import { ref } from 'vue'
import { TEST_REGISTRY } from '../../data'

const emit = defineEmits(['show-result'])
const isVisible = ref(true)
const isOpen = ref(false)
const expandedSuites = ref<Record<string, boolean>>({})
let pressTimer: number | null = null

const onTouchStart = () => {
  pressTimer = window.setTimeout(() => {
    isVisible.value = false
  }, 1000)
}

const onTouchEnd = () => {
  if (pressTimer) {
    clearTimeout(pressTimer)
    pressTimer = null
  }
}

const onClick = () => {
  if (isVisible.value) {
    isOpen.value = !isOpen.value
  }
}

const showResult = (testId: string, result: any) => {
//   isOpen.value = false
  emit('show-result', testId, result)
}
</script>

<template>
  <div v-if="isVisible" class="fixed bottom-4 right-4 z-[9999] flex flex-col items-end">
    <div v-if="isOpen" class="mb-2 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 max-h-[60vh] overflow-y-auto w-64 text-sm safe-area-bottom">
      <div v-for="suite in TEST_REGISTRY" :key="suite.id" class="mb-4 last:mb-0">
        <div 
          class="font-bold text-slate-800 mb-2 flex justify-between items-center cursor-pointer select-none"
          @click.stop="expandedSuites[suite.id] = !expandedSuites[suite.id]"
        >
          <span>{{ suite.name }}</span>
          <svg 
            class="w-4 h-4 text-slate-400 transition-transform" 
            :class="{ 'rotate-180': expandedSuites[suite.id] }" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div v-show="expandedSuites[suite.id]" class="flex flex-col gap-1 pl-2 border-l-2 border-slate-100">
          <button
            v-for="res in suite.results"
            :key="res.id"
            class="text-left px-2 py-1.5 rounded text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            @click.stop="showResult(suite.id, res)"
          >
            {{ res.title }}
          </button>
        </div>
      </div>
    </div>

    <button
      class="w-12 h-12 bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
      title="长按移除按钮"
      @mousedown="onTouchStart"
      @mouseup="onTouchEnd"
      @mouseleave="onTouchEnd"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
      @click="onClick"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    </button>
  </div>
</template>
