<script setup lang="ts">
import { computed } from 'vue'
import { useTestStore } from '../../stores/testStore'
import Card from '../common/Card.vue'

const emit = defineEmits(['restart'])
const store = useTestStore()

// 获取结论
const result = computed(() => store.computedResult?.primaryResult)
// 获取雷达图数据或维度得分
const radarData = computed(() => store.computedResult?.radarData || [])

const onRestart = () => {
  store.reset()
  emit('restart')
}
</script>

<template>
  <div class="w-full h-full overflow-y-auto px-6 py-8 space-y-6 animate-slide-up bg-slate-50 relative">
    <!-- 顶部操作栏 -->
    <div class="flex items-center">
      <button 
        class="w-10 h-10 flex items-center justify-center rounded-xl bg-white border-2 border-slate-100 text-slate-500 shadow-sm transition-all active:scale-95" 
        @click="onRestart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
    </div>

    <!-- 结果头部 -->
    <div class="text-center space-y-4" v-if="result">
      <div 
        class="text-6xl mx-auto w-24 h-24 flex items-center justify-center rounded-3xl"
        :style="{ backgroundColor: result.color + '20', color: result.color }"
      >
        {{ result.emoji }}
      </div>
      <div>
        <h1 class="text-3xl font-extrabold" :style="{ color: result.color }">{{ result.title }}</h1>
        <p class="text-slate-500 font-medium mt-1">{{ result.subtitle }}</p>
      </div>
    </div>

    <!-- 结果描述 -->
    <Card padding="p-6" class="space-y-4">
      <h3 class="text-lg font-bold text-slate-800">人格解析</h3>
      <div class="space-y-2 text-slate-600 text-sm leading-relaxed">
        <p v-for="(desc, idx) in result?.description" :key="idx">{{ desc }}</p>
      </div>
    </Card>

    <!-- 维度数据 -->
    <Card padding="p-6" class="space-y-4">
      <h3 class="text-lg font-bold text-slate-800">维度得分</h3>
      <div class="space-y-4 pt-1">
        <div v-for="item in radarData" :key="item.dimension" class="space-y-1">
          <div class="flex justify-between text-xs font-semibold text-slate-500">
            <span>{{ item.label }}</span>
            <span>{{ Math.round(item.score) }} / {{ Math.round(item.maxScore) }}</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden relative">
            <div 
              class="h-full rounded-full transition-all duration-1000 absolute left-0 top-0"
              :style="{ width: `${(item.score / item.maxScore) * 100}%`, backgroundColor: result?.color || '#3b82f6' }"
            ></div>
          </div>
        </div>
      </div>
    </Card>

    <!-- 底部按钮 -->
    <div class="pt-4 pb-8">
      <button 
        class="w-full py-4 px-6 rounded-2xl text-white font-bold text-lg shadow-xl active:scale-95 transition-all"
        :style="{ backgroundColor: result?.color || '#1e293b', boxShadow: `0 10px 25px -5px ${result?.color || '#1e293b'}40` }"
        @click="onRestart"
      >
        再测一次
      </button>
    </div>
  </div>
</template>
