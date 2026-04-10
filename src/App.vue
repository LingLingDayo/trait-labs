<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HomeStage from './components/home/HomeStage.vue'
import TestStage from './components/test/TestStage.vue'
import { useTestStore } from './stores/testStore'

const isStarted = ref(false)
const store = useTestStore()

const startTest = (testId: string) => {
  store.startTest(testId)
  isStarted.value = true
}

const onTestComplete = () => {
  console.log("Test Finished. Result:", store.computedResult)
  // 暂时输出到 console, 这边可以加一个结果展现场景
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center max-w-[480px] mx-auto bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-50 to-transparent -z-10 opacity-60"></div>
    <div class="absolute -top-24 -right-24 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-40"></div>
    
    <AppHeader />

    <main class="flex-1 w-full flex flex-col">
      <HomeStage v-if="!isStarted" @start="startTest" />
      <TestStage v-else @complete="onTestComplete" />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Any global App specific styles can go here */
</style>
