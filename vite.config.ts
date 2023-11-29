import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from 'vite-plugin-mock'
import path from "path";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":pathSrc,
    }
  },
  plugins: [vue(),
    //自动导入
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      eslintrc: {
        enabled: false, // 是否自动生成 eslint 规则，建议生成之后设置 false 
        filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
      },
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
    }),
    Components({
      dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
    }),
  // mock服务
  viteMockServe({
    supportTs: false,
    logger: false,
    mockPath: "./src/mock/",
  }),
  ],
})
