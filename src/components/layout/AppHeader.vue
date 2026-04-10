<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isCollapsed = ref(false)
const isHovered = ref(false)

onMounted(() => {
  // 页面加载 2.5 秒后自动收起
  setTimeout(() => {
    isCollapsed.value = true
  }, 2500)
})
</script>

<template>
  <div 
    class="w-full relative z-50 transition-all duration-700 ease-in-out overflow-hidden"
    :class="[
      isCollapsed && !isHovered ? 'h-2 opacity-50' : 'h-[64px] opacity-100',
    ]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <header 
      class="w-full px-6 py-3 flex justify-between items-center transition-transform duration-700 ease-in-out"
      :class="isCollapsed && !isHovered ? '-translate-y-full' : 'translate-y-0'"
    >
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl overflow-hidden shadow-md bg-white border border-slate-100 flex-shrink-0">
          <img src="../../assets/images/hero.png" alt="Logo" class="w-full h-full object-cover scale-125 transition-transform" />
        </div>
        <span class="text-xl font-bold tracking-tight text-slate-800">Trait Labs</span>
      </div>
    </header>
  </div>
</template>

<style scoped>
/* 确保点击穿透等基础行为符合预期 */
</style>
