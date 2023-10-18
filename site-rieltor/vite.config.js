import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': '/src', // Этот алиас указывает на корневую директорию src
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].html", // Это включит другие HTML-файлы
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
});