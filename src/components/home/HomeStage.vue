<script setup lang="ts">
import { ref } from 'vue'
import Button from '../common/Button.vue'
import { TEST_REGISTRY } from '../../data'
import { isUtools } from '../../utils/env'

defineEmits(['start'])

const testTypes = TEST_REGISTRY.filter(suite => {
  if (suite.id === 'debug') {
    return import.meta.env.DEV
  }
  return true
})

const activeTestType = ref(testTypes[1] || testTypes[0])
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
  <div 
    class="flex-1 min-h-0 w-full flex flex-col animate-slide-up overflow-y-auto overflow-x-hidden scrollbar-hide safe-area-bottom"
    :class="isUtools() ? 'px-6 py-0' : 'px-6 py-10'"
  >
    <!-- Main Content Area -->
    <div 
      class="flex-1 flex flex-col items-center justify-center space-y-8 py-2"
      :class="isUtools() ? '' : ' md:gap-8'"
    >
      
      <!-- Top Section: Logo/Hero + Title side by side -->
      <div class="w-full flex items-center gap-6 md:gap-16 justify-center">
        <!-- 英雄图容器：缩小并移动到侧边，增加持续摆动动画 -->
        <div 
          class="relative flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-premium transition-colors duration-700 animate-sway-float"
          :class="typeThemes[activeTestType.id] || 'bg-white'"
        >
          <img 
            src="../../assets/images/hero.jpg" 
            alt="Hero Image" 
            class="w-full h-full object-cover" 
          />
        </div>

        <!-- Title Section: 使用 flex-1 稳固空间，防止内容切换导致整体宽度波动抖动 -->
        <div class="flex-1 md:flex-none md:w-[330px] min-w-0 flex flex-col justify-center">
          <Transition name="fade-slide" mode="out-in">
            <h1 
              :key="activeTestType.id"
              class="text-3xl md:text-4xl font-black text-slate-900 leading-tight text-left md:flex md:flex-col md:gap-4"
              v-html="activeTestType.tagline"
            >
            </h1>
          </Transition>
        </div>
      </div>

      <!-- Description Area -->
      <div class="w-full md:text-center">
        <Transition name="fade-slide" mode="out-in">
          <p :key="activeTestType.id" class="flex flex-col justify-center text-slate-500 text-base md:text-lg leading-relaxed text-left md:text-center opacity-80 pl-1 min-h-[4.875rem]">
            {{ activeTestType.description }}
          </p>
        </Transition>
      </div>

      <!-- Test Types Selector: Keep centered -->
      <div class="w-full flex flex-col items-center space-y-2">
        <span class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">选择你的探索方向</span>
        <div 
          ref="scrollContainer"
          class="flex gap-2 w-full max-w-[500px] overflow-x-auto py-5 px-4 scrollbar-hide scroll-smooth mask-fade-horizontal"
        >
          <button 
            v-for="item in testTypes" 
            :key="item.id"
            @click="selectType($event, item)"
            class="flex-shrink-0 px-5 py-2 md:px-6 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap"
            :class="activeTestType.id === item.id ? 'bg-primary-500 text-white shadow-lg scale-105' : 'bg-white/60 text-slate-400 hover:bg-white hover:text-slate-600 shadow-sm'"
          >
            {{ item.name }}
          </button>
        </div>
      </div>

      <!-- Action Button -->
      <div class="w-full max-w-[400px] pt-2">
        <Button size="xl" class="w-full shadow-premium-hover" @click="$emit('start', activeTestType.id)">
          立即开启探索
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 核心漂浮摆动动画 */
@keyframes sway-float {
  0%, 100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

.animate-sway-float {
  animation: sway-float 4s ease-in-out infinite;
}

/* 内容切换动画 */
.fade-slide-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-slide-leave-active {
  transition: all 0.2s cubic-bezier(0.5, 0, 0.75, 0);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.mask-fade-horizontal {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
}
</style>
