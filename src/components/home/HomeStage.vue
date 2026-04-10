<script setup lang="ts">
import { ref } from 'vue'
import Button from '../common/Button.vue'
import { TEST_REGISTRY } from '../../data'

defineEmits(['start'])

const testTypes = TEST_REGISTRY.filter(suite => {
  if (suite.id === 'debug') {
    return import.meta.env.DEV
  }
  return true
})

const activeTestType = ref(testTypes[0])
const scrollContainer = ref<HTMLElement | null>(null)

const selectType = (event: MouseEvent, item: typeof testTypes[0]) => {
  activeTestType.value = item
  
  if (scrollContainer.value) {
    const container = scrollContainer.value
    const target = event.currentTarget as HTMLElement
    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    
    const offset = targetRect.left - containerRect.left + container.scrollLeft
    const scrollLeft = offset - container.offsetWidth / 2 + target.offsetWidth / 2
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="flex-1 min-h-0 w-full flex flex-col p-6 animate-slide-up overflow-y-auto overflow-x-hidden">
    <!-- Hero Section -->
    <div class="flex-1 flex flex-col items-center justify-center text-center space-y-6">
      <div class="relative w-full aspect-square max-w-[320px] rounded-[40px] overflow-hidden shadow-premium group bg-white">
        <img src="../../assets/images/hero.png" alt="Mysterious Minimalist Tree" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>

      <!-- Test Types Selector -->
      <div 
        ref="scrollContainer"
        class="flex gap-2 w-full max-w-[320px] overflow-x-auto py-4 px-4 scrollbar-hide scroll-smooth mask-fade-horizontal"
      >
        <button 
          v-for="item in testTypes" 
          :key="item.id"
          @click="selectType($event, item)"
          class="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap"
          :class="activeTestType.id === item.id ? 'bg-primary-500 text-white shadow-lg scale-105' : 'bg-white/60 text-slate-400 hover:bg-white hover:text-slate-600'"
        >
          {{ item.name }}
        </button>
      </div>

      <div class="space-y-4">
        <h1 
          class="text-4xl font-extrabold text-slate-900 leading-tight"
          v-html="activeTestType.tagline"
        ></h1>
        <p class="text-slate-500 text-lg max-w-[280px] mx-auto leading-relaxed">
          {{ activeTestType.description }}
        </p>
      </div>

      <div class="w-full max-w-[300px] pt-2">
        <Button size="xl" class="w-full" @click="$emit('start', activeTestType.id)">
          立即开始测试
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mask-fade-horizontal {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}
</style>
