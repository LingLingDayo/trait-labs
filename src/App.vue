<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/common/Button.vue'
import Card from './components/common/Card.vue'
import ProgressBar from './components/test/ProgressBar.vue'

const isStarted = ref(false)
const progress = ref(0)

const startTest = () => {
  isStarted.value = true
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 5
    } else {
      clearInterval(interval)
    }
  }, 100)
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center max-w-[480px] mx-auto bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-50 to-transparent -z-10 opacity-60"></div>
    <div class="absolute -top-24 -right-24 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-40"></div>
    
    <!-- Header -->
    <header class="w-full p-6 flex justify-between items-center animate-fade-in">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20">
          <span class="text-white font-bold text-xl">T</span>
        </div>
        <span class="text-xl font-bold tracking-tight text-slate-800">Trait Labs</span>
      </div>

    </header>

    <main class="flex-1 w-full flex flex-col p-6 animate-slide-up">
      <template v-if="!isStarted">
        <!-- Hero Section -->
        <div class="flex-1 flex flex-col items-center justify-center text-center space-y-8">
          <div class="relative w-full aspect-square max-w-[320px] rounded-[40px] overflow-hidden shadow-premium">
            <img src="./assets/images/hero.png" alt="Hero" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl font-extrabold text-slate-900 leading-tight">
              探索真实的<br />
              <span class="text-primary-500">内在人格</span>
            </h1>
            <p class="text-slate-500 text-lg max-w-[280px] mx-auto leading-relaxed">
              基于大五人格与 MBTI 指标，为你提供专业、深度的自我洞察。
            </p>
          </div>

          <div class="w-full max-w-[300px] pt-4">
            <Button size="xl" class="w-full" @click="startTest">
              立即开始测试
            </Button>
            <p class="text-xs text-slate-400 mt-4">完成测试约需 3 分钟</p>
          </div>
        </div>

        <!-- Features -->
        <div class="grid grid-cols-2 gap-4 mt-8">
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
      </template>

      <template v-else>
        <!-- Testing Placeholder -->
        <div class="flex-1 flex flex-col gap-8 pt-12">
          <ProgressBar :progress="progress" show-label />
          
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-slate-800">你更倾向于在社交场合中保持低调吗？</h2>
            
            <div class="space-y-4">
              <Card hoverable padding="p-5" class="cursor-pointer border-2 border-transparent hover:border-primary-100">
                <div class="flex items-center gap-4">
                  <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-primary-500 opacity-0 transition-opacity"></div>
                  </div>
                  <span class="font-medium text-slate-700">非常同意</span>
                </div>
              </Card>
              <Card hoverable padding="p-5" class="cursor-pointer border-2 border-transparent hover:border-primary-100">
                <div class="flex items-center gap-4">
                  <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center"></div>
                  <span class="font-medium text-slate-700">比较同意</span>
                </div>
              </Card>
              <Card hoverable padding="p-5" class="cursor-pointer border-2 border-transparent hover:border-primary-100">
                <div class="flex items-center gap-4">
                  <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center"></div>
                  <span class="font-medium text-slate-700">中立</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </template>
    </main>

    <!-- Footer Decor -->
    <footer class="w-full pb-8 pt-4 text-center">
      <p class="text-[10px] text-slate-300 uppercase tracking-widest">Powered by Trait Engine v1.0</p>
    </footer>
  </div>
</template>

<style>
/* Any global App specific styles can go here */
</style>
