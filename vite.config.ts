import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 判断是否在 GitHub Actions 环境中运行
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

// https://vite.dev/config/
export default defineConfig({
  // 如果是 GitHub 自动化部署，就用仓库路径；本地打包则保留 ./
  base: isGitHubActions ? '/trait-labs/' : './',
  plugins: [vue()],
  server: {
    host: true,
  },
})
