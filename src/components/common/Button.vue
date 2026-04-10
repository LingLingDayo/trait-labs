<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
});

defineEmits(['click']);
</script>

<template>
  <button
    class="interactive-button group relative flex items-center justify-center font-medium rounded-2xl transition-all"
    :class="[
      {
        'bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600': variant === 'primary',
        'bg-accent-500 text-white shadow-lg shadow-accent-500/25 hover:bg-accent-600': variant === 'secondary',
        'bg-white text-slate-700 border border-slate-200 hover:border-primary-300 hover:text-primary-600': variant === 'outline',
        'text-slate-500 hover:bg-slate-100': variant === 'ghost',
        'opacity-50 cursor-not-allowed active:scale-100': disabled || loading,
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
        'px-10 py-5 text-xl': size === 'xl',
      }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <div v-if="loading" class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
    <slot />
  </button>
</template>
