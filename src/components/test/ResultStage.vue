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

// 根据ID一致性生成伪随机稀有度 (0.5% ~ 4.5%)
const rarityPercentage = computed(() => {
  if (!result.value?.id) return '1.0'
  let hash = 0
  for (let i = 0; i < result.value.id.length; i++) {
    hash = result.value.id.charCodeAt(i) + ((hash << 5) - hash)
  }
  hash = Math.abs(hash)
  return (0.5 + (hash % 40) / 10).toFixed(1)
})

// 动态稀有度文案
const displayRarityLabel = computed(() => {
  if (result.value?.rarityLabel) return result.value.rarityLabel
  
  const p = parseFloat(rarityPercentage.value)
  const idHash = result.value?.id ? result.value.id.length : 0
  
  const slogans = [
    { t: 1.0, s: ['✨ 传说级存在', '🌌 万中无一', '💎 申遗级别稀有', '👑 绝世孤品', '🛸 外星人竟是你'] },
    { t: 1.8, s: ['✨ 极度稀有', '🌟 千里挑一', '🧬 基因突变级罕见', '🔍 这种人格很难找', '🎭 独特的灵魂'] },
    { t: 3.0, s: ['✨ 相当罕见', '🌈 百里挑一', '📈 稀有品种', '🧩 独特样本', '🎋 罕见的人格特质'] },
    { t: 5.0, s: ['✨ 挺特殊的', '🎯 少数派', '🍃 别具一格', '✨ 闪光点', '🌊 独特的分支'] }
  ]
  
  const pool = slogans.find(s => p <= s.t)?.s || slogans[slogans.length - 1].s
  // 使用 hash 保证同一个结果文案固定
  const label = pool[idHash % pool.length]
  
  return `${label}！全球仅有 ${rarityPercentage.value}% 的人是${result.value?.title}`
})

// 获取图片路径
const getImageUrl = (name?: string) => {
  if (!name || !store.activeTestId) return null
  // Vite 动态导入资产的标准写法，加入测试类型子目录
  return new URL(`../../assets/images/${store.activeTestId}/${name}`, import.meta.url).href
}

const onRestart = () => {
  store.reset()
  emit('restart')
}
</script>

<template>
  <div class="w-full h-full overflow-y-auto px-6 py-8 space-y-6 animate-slide-up bg-transparent relative scrollbar-hide">
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
      <!-- 图片容器 -->
      <div 
        class="w-40 h-40 mx-auto flex items-center justify-center rounded-[48px] overflow-hidden shadow-premium bg-white group"
        :style="{ border: `4px solid ${result.color}15` }"
      >
        <img 
          v-if="result.image" 
          :src="getImageUrl(result.image)!" 
          :alt="result.title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div 
          v-else
          class="text-7xl w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
          :style="{ backgroundColor: result.color + '10', color: result.color }"
        >
          {{ result.emoji }}
        </div>
      </div>

      <div>
        <h1 class="text-3xl font-extrabold" :style="{ color: result.color }">{{ result.title }}</h1>
        <p class="text-slate-500 font-medium mt-1">{{ result.subtitle }}</p>
        
        <!-- 稀有度标签 -->
        <div 
          class="inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold border"
          :style="{ 
            backgroundColor: result.color + '10',
            borderColor: result.color + '30',
            color: result.color 
          }"
        >
          {{ displayRarityLabel }}
        </div>
      </div>
    </div>

    <!-- 结果描述 -->
    <Card padding="p-6" class="space-y-4">
      <h3 class="text-lg font-bold text-slate-800">人格解析</h3>
      <div class="space-y-2 text-slate-600 text-sm leading-relaxed">
        <p v-for="(desc, idx) in result?.description" :key="idx">{{ desc }}</p>
      </div>
    </Card>

    <!-- 优势标签 -->
    <div class="flex flex-wrap gap-2 py-1" v-if="result?.strengths?.length">
      <div 
        v-for="strength in result.strengths" 
        :key="strength"
        class="px-4 py-2 rounded-2xl text-sm font-bold shadow-sm border transition-all hover:shadow-md"
        :style="{ 
          backgroundColor: result.color + '08', 
          borderColor: result.color + '20',
          color: result.color 
        }"
      >
        # {{ strength }}
      </div>
    </div>


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
              :style="{ width: `${(item.score / item.maxScore) * 100}%`, backgroundColor: result?.color || '#A78BFA' }"
            ></div>
          </div>
        </div>
      </div>
    </Card>

    <!-- 核心建议 -->
    <Card padding="p-6" class="space-y-4" v-if="result?.growthTips?.length">
      <h3 class="text-lg font-bold text-slate-800">成长建议</h3>
      <div class="space-y-3">
        <div 
          v-for="(tip, idx) in result.growthTips" 
          :key="idx"
          class="flex items-start gap-4 text-slate-600 text-sm leading-relaxed"
        >
          <div 
            class="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm"
            :style="{ backgroundColor: result.color }"
          >
            {{ idx + 1 }}
          </div>
          <p>{{ tip }}</p>
        </div>
      </div>
    </Card>


    <!-- 底部按钮 -->
    <div class="pt-4 pb-8">
      <button 
        class="w-full py-4 px-6 rounded-2xl text-white font-bold text-lg shadow-xl active:scale-95 transition-all"
        :style="{ backgroundColor: result?.color || '#A78BFA', boxShadow: `0 10px 25px -5px ${result?.color || '#A78BFA'}40` }"
        @click="onRestart"
      >
        再测一次
      </button>
    </div>
  </div>
</template>
