import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  // mock服务
  viteMockServe({
    supportTs: false,
    logger: false,
    mockPath: "./src/mock/",
  }),
  ],
})