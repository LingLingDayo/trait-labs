<script setup lang="ts">
/**
 * TraitConfirm - 高级确认弹窗组件
 * 采用马卡龙色系、玻璃拟态动画、现代圆角大按钮设计
 */
interface Props {
  show: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'primary' | 'danger';
}

const props = withDefaults(defineProps<Props>(), {
  title: '确认离开？',
  confirmText: '确定离开',
  cancelText: '继续答题',
  variant: 'primary',
})

const emit = defineEmits(['confirm', 'cancel', 'update:show'])

const handleCancel = () => {
  emit('update:show', false)
  emit('cancel')
}

const handleConfirm = () => {
  emit('update:show', false)
  emit('confirm')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <!-- 更加深邃的背景毛玻璃 -->
      <div 
        v-if="show" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md"
        @click.self="handleCancel"
      >
        <Transition name="modal-premium" appear>
          <!-- 强化玻璃拟态质感 -->
          <div 
            v-if="show"
            class="w-full max-w-[340px] bg-white/90 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[32px] p-8 flex flex-col items-center"
          >
            <!-- 带有呼吸灯效果的图标 -->
            <div class="relative mb-6">
              <div 
                class="absolute inset-0 bg-primary-400/20 blur-2xl rounded-full animate-pulse"
                :class="variant === 'danger' ? 'bg-rose-400/20' : 'bg-primary-400/20'"
              ></div>
              <div 
                class="relative w-16 h-16 rounded-[22px] flex items-center justify-center shadow-lg"
                :class="variant === 'danger' ? 'bg-rose-50 text-rose-500' : 'bg-primary-50 text-primary-500'"
              >
                <svg v-if="variant === 'primary'" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
            </div>
            
            <!-- 文字内容 -->
            <h3 class="text-2xl font-extrabold text-slate-900 mb-3 text-center tracking-tight">
              {{ title }}
            </h3>
            
            <p class="text-slate-500 text-sm leading-relaxed text-center mb-8 px-2">
              {{ message }}
            </p>
            
            <!-- 现代堆叠式大按钮 -->
            <div class="w-full space-y-3">
              <button 
                class="w-full py-4 rounded-[20px] font-bold text-white shadow-xl shadow-primary-500/25 active:scale-[0.98] active:brightness-90 transition-all duration-300 transform"
                :class="variant === 'primary' ? 'bg-primary-500 shadow-primary-500/30' : 'bg-rose-500 shadow-rose-500/30'"
                @click="handleConfirm"
              >
                {{ confirmText }}
              </button>
              
              <button 
                class="w-full py-4 rounded-[20px] bg-slate-100/80 hover:bg-slate-100 text-slate-500 font-bold active:scale-[0.98] transition-all duration-300"
                @click="handleCancel"
              >
                {{ cancelText }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* 遮罩渐入 */
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 弹窗高级动画：带点弹性的进入 */
.modal-premium-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-premium-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
}
.modal-premium-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(30px);
}
.modal-premium-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
</style>
