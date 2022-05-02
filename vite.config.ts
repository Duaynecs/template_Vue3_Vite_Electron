import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

const PACKAGE_ROOT = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '@': join(PACKAGE_ROOT, 'src') + '/',
      '**': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  base: process.env.ELECTRON == "true" ? './' : ".",
  plugins: [vue()]
})
