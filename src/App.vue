<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
// import AppFooter from './components/layout/AppFooter.vue'
import HomeStage from './components/home/HomeStage.vue'
import TestStage from './components/test/TestStage.vue'
import ResultStage from './components/test/ResultStage.vue'
import DevTools from './components/dev/DevTools.vue'
import type { PersonalityResult } from './data/types'
import { useTestStore } from './stores/testStore'
import { isUtools } from './utils/env'

const isStarted = ref(false)
const isCompleted = ref(false)
const store = useTestStore()
const isDev = import.meta.env.DEV

const startTest = (testId: string) => {
  store.startTest(testId)
  isStarted.value = true
  isCompleted.value = false
}

const onTestComplete = () => {
  console.log("Test Finished. Result:", store.computedResult)
  isCompleted.value = true
}

const onRestart = () => {
  isStarted.value = false
  isCompleted.value = false
}

const onShowResult = (testId: string, result: PersonalityResult) => {
  store.setDebugResult(testId, result)
  isStarted.value = true
  isCompleted.value = true
}
</script>

<template>
  <div class="h-[100svh] flex flex-col items-center w-full bg-slate-50 relative overflow-hidden">
    <!-- Background Decor (Full Width) -->
    <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-50 to-transparent -z-10 opacity-60"></div>
    <div 
      class="absolute -top-24 -right-24 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-40"
      :class="{ 'max-md:hidden': isStarted }"
    ></div>
    
    <!-- Main Content wrapper (Responsive Max-width) -->
    <div class="w-full max-w-[1024px] h-full flex flex-col relative">
      <AppHeader v-if="!isUtools()" />

      <main class="flex-1 w-full flex flex-col overflow-hidden">
        <HomeStage v-if="!isStarted" @start="startTest" />
        <TestStage v-else-if="!isCompleted" @complete="onTestComplete" @restart="onRestart" />
        <ResultStage v-else @restart="onRestart" />
      </main>

      <DevTools v-if="isDev" @show-result="onShowResult" />
    </div>
  </div>
</template>

<style>
/* Any global App specific styles can go here */
</style>
