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
    class="bg-white border border-slate-100 rounded-[32px] shadow-soft transition-all duration-300"
    :class="[
      padding,
      { 'hover:shadow-premium hover:-translate-y-1': hoverable }
    ]"
  >
    <slot />
  </div>
</template>
