import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 将警告阈值调整为 1000KB（1MB）
    chunkSizeWarningLimit: 1000
  }
})
