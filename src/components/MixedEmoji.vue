<script setup lang="ts">
import { computed } from 'vue';
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

const getEmojiUrl = (id: string) => {
  // 按照 Fluent UI Emoji 的规则生成路径
  // 文件夹名需要精确匹配，文件名则是小写下划线形式
  const folderName = id;
  const fileName = folderName.toLowerCase().replace(/ /g, '_') + '_flat.svg';
  const encodedFolder = encodeURIComponent(folderName);
  
  return `https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/${encodedFolder}/Flat/${fileName}`;
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
      <img 
        :src="getEmojiUrl(layer.id)" 
        :alt="layer.id"
        class="w-full h-full object-contain pointer-events-none drop-shadow-sm"
      />
    </div>
  </div>
</template>

<style scoped>
.drop-shadow-sm {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>
