<script setup lang="ts">
interface Props {
  progress: number; // 0 to 100
  showLabel?: boolean;
}

withDefaults(defineProps<Props>(), {
  showLabel: false,
});
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between items-end mb-2" v-if="showLabel">
      <span class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Progress</span>
      <span class="text-sm font-bold text-primary-500">{{ Math.round(progress) }}%</span>
    </div>
    <div class="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
      <div
        class="h-full bg-primary-500 rounded-full transition-all duration-700 ease-out"
        :style="{ width: `${progress}%` }"
      >
        <div class="w-full h-full bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>
