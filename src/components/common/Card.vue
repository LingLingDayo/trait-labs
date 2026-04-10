<script setup lang="ts">
interface Props {
  hoverable?: boolean;
  padding?: string;
}

withDefaults(defineProps<Props>(), {
  hoverable: false,
  padding: 'p-6',
});
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-[32px] shadow-soft transition-all duration-300 overflow-hidden"
    :class="[
      padding,
      { 'hover:shadow-premium active:scale-[0.98] cursor-pointer select-none': hoverable }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
/* 确保点击状态更丝滑 */
.active\:scale-\[0\.98\]:active {
  transform: scale(0.98);
}
</style>
