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

// 各测试类型的视觉主题色映射
const typeThemes: Record<string, string> = {
  personality: 'bg-primary-50/50',
  chaos: 'bg-rose-50/50',
  nonsense: 'bg-emerald-50/50',
  otaku: 'bg-blue-50/50',
  debug: 'bg-slate-50/50'
}

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
      <!-- 英雄图容器：增加背景色平滑过渡 -->
      <div 
        class="relative w-full aspect-square max-w-[360px] rounded-[40px] overflow-hidden shadow-premium group transition-colors duration-700"
        :class="typeThemes[activeTestType.id] || 'bg-white'"
      >
        <img 
          src="../../assets/images/hero.png" 
          alt="Mysterious Minimalist Tree" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>

      <!-- Test Types Selector -->
      <div 
        ref="scrollContainer"
        class="flex gap-2 w-full max-w-[320px] overflow-x-auto py-6 px-4 scrollbar-hide scroll-smooth mask-fade-horizontal"
      >
        <button 
          v-for="item in testTypes" 
          :key="item.id"
          @click="selectType($event, item)"
          class="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap"
          :class="activeTestType.id === item.id ? 'bg-primary-500 text-white shadow-lg scale-105' : 'bg-white/60 text-slate-400 hover:bg-white hover:text-slate-600 shadow-sm'"
        >
          {{ item.name }}
        </button>
      </div>

      <div class="w-full max-w-[320px]">
        <Transition name="fade-slide" mode="out-in">
          <div :key="activeTestType.id" class="space-y-4">
            <h1 
              class="text-4xl font-extrabold text-slate-900 leading-tight min-h-[5rem] flex items-center justify-center whitespace-nowrap"
            >
              <span v-html="activeTestType.tagline"></span>
            </h1>
            <p class="text-slate-500 text-lg max-w-[280px] mx-auto leading-relaxed">
              {{ activeTestType.description }}
            </p>
          </div>
        </Transition>
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
/* 内容切换动画 */
.fade-slide-enter-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 0, 0.75, 0);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0.98);
}

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
