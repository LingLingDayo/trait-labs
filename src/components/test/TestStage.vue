<script setup lang="ts">
import Card from '../common/Card.vue'
import ProgressBar from './ProgressBar.vue'

defineProps<{
  progress: number
}>()
</script>

<template>
  <div class="flex-1 w-full flex flex-col p-6 animate-slide-up">
    <!-- Testing Placeholder -->
    <div class="flex-1 flex flex-col gap-8 pt-12">
      <ProgressBar :progress="progress" show-label />
      
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-slate-800">你更倾向于在社交场合中保持低调吗？</h2>
        
        <div class="space-y-4">
          <Card hoverable padding="p-5" class="cursor-pointer border-2 border-transparent hover:border-primary-100">
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center">
                <div class="w-2 h-2 rounded-full bg-primary-500 opacity-0 transition-opacity"></div>
              </div>
              <span class="font-medium text-slate-700">非常同意</span>
            </div>
          </Card>
          <Card hoverable padding="p-5" class="cursor-pointer border-2 border-transparent hover:border-primary-100">
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center"></div>
              <span class="font-medium text-slate-700">比较同意</span>
            </div>
          </Card>
          <Card hoverable padding="p-5" class="cursor-pointer border-2 border-transparent hover:border-primary-100">
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center"></div>
              <span class="font-medium text-slate-700">中立</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
