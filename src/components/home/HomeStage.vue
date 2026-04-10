<script setup lang="ts">
import { ref } from 'vue'
import Button from '../common/Button.vue'
import Card from '../common/Card.vue'

defineEmits(['start'])

const baseTestTypes = [
  { id: 'personality', name: '人格测试', title: '内在人格', desc: '基于大五人格与 MBTI 指标，为你提供专业、深度的自我洞察。' },
  { id: 'psychological', name: '心理测试', title: '内心世界', desc: '通过科学严谨的心理测试量表，多维度地评估你的心理状态。' },
  { id: 'career', name: '职业测试', title: '职业倾向', desc: '发掘你的核心优势与潜能，为你提供最专业的职业发展建议。' }
]

const testTypes = import.meta.env.DEV 
  ? [{ id: 'debug', name: '开发测试', title: '开发调试', desc: '这是一个极简题库，用于快速验证功能与 UI 流程喵。' }, ...baseTestTypes]
  : baseTestTypes

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
          :class="activeTestType.id === item.id ? 'bg-primary-500 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'"
        >
          {{ item.name }}
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-4xl font-extrabold text-slate-900 leading-tight">
          探索真实的<br />
          <span class="text-primary-500">{{ activeTestType.title }}</span>
        </h1>
        <p class="text-slate-500 text-lg max-w-[280px] mx-auto leading-relaxed">
          {{ activeTestType.desc }}
        </p>
      </div>

      <div class="w-full max-w-[300px] pt-2">
        <Button size="xl" class="w-full" @click="$emit('start', activeTestType.id)">
          立即开始测试
        </Button>
        <p class="text-xs text-slate-400 mt-4">完成测试约需 3 分钟</p>
      </div>
    </div>

    <!-- Features -->
    <div class="grid grid-cols-2 gap-4 mt-6">
      <Card padding="p-4" class="text-center">
        <div class="text-2xl mb-1">🎯</div>
        <div class="text-sm font-bold text-slate-800">精准定位</div>
        <div class="text-[10px] text-slate-400 mt-1">深度自研模型</div>
      </Card>
      <Card padding="p-4" class="text-center">
        <div class="text-2xl mb-1">📊</div>
        <div class="text-sm font-bold text-slate-800">量化分析</div>
        <div class="text-[10px] text-slate-400 mt-1">多维度可视化</div>
      </Card>
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
