<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import type { EmojiLayer } from '../data/types';

const props = defineProps<{
  size?: string | number;
  layers: (string | EmojiLayer)[];
}>();

// 将简单的字符串层级转换为对象格式
const normalizedLayers = computed(() => {
  return props.layers.map((layer, index) => {
    if (typeof layer === 'string') {
      return { id: layer, zIndex: index };
    }
    return { ...layer, zIndex: layer.zIndex ?? index };
  });
});

const getIconName = (id: string) => {
  // 将 'Melting face' 转换为 'fluent-emoji-flat:melting-face'
  const slug = id.toLowerCase().replace(/ /g, '-');
  return `fluent-emoji-flat:${slug}`;
};

const containerStyle = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size || '100%',
  aspectRatio: '1/1',
}));
</script>

<template>
  <div class="relative inline-flex items-center justify-center overflow-visible" :style="containerStyle">
    <div
      v-for="(layer, index) in normalizedLayers"
      :key="index"
      class="absolute transition-all duration-500 transform-gpu"
      :style="{
        zIndex: layer.zIndex,
        width: `${(layer.scale ?? 1) * 100}%`,
        height: `${(layer.scale ?? 1) * 100}%`,
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${layer.x ?? 0}%), calc(-50% + ${layer.y ?? 0}%))`,
      }"
    >
      <div 
        class="w-full h-full flex items-center justify-center"
        :class="[layer.animation ? `animate-${layer.animation}` : '']"
        :style="{
          transform: `rotate(${layer.rotate ?? 0}deg)`,
        }"
      >
        <Icon 
          :icon="getIconName(layer.id)" 
          class="w-full h-full drop-shadow-sm"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.drop-shadow-sm {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-spin {
  animation: spin 4s linear infinite;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-shake {
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10%); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(-15%); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5%); }
  75% { transform: translateX(5%); }
}
</style>
