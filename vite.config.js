import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/vars" as *;
          @use "@/assets/scss/reset" as *;
          @use "@/assets/scss/media-break-points.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
