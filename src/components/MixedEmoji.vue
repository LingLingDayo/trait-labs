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
      class="absolute transition-transform duration-500 transform-gpu"
      :style="{
        zIndex: layer.zIndex,
        width: `${(layer.scale ?? 1) * 100}%`,
        height: `${(layer.scale ?? 1) * 100}%`,
        left: `${(layer.x ?? 0)}%`,
        top: `${(layer.y ?? 0)}%`,
        transform: `rotate(${layer.rotate ?? 0}deg)`,
      }"
    >
      <Icon 
        :icon="getIconName(layer.id)" 
        class="w-full h-full drop-shadow-sm"
      />
    </div>
  </div>
</template>

<style scoped>
.drop-shadow-sm {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>
