<script setup lang="ts">
import Button from '../common/Button.vue'
import Card from '../common/Card.vue'

defineEmits(['start'])
</script>

<template>
  <div class="flex-1 w-full flex flex-col p-6 animate-slide-up">
    <!-- Hero Section -->
    <div class="flex-1 flex flex-col items-center justify-center text-center space-y-8">
      <div class="relative w-full aspect-square max-w-[320px] rounded-[40px] overflow-hidden shadow-premium">
        <img src="../../assets/images/hero.png" alt="Hero" class="w-full h-full object-cover" />
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
        <Button size="xl" class="w-full" @click="$emit('start')">
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
  </div>
</template>
