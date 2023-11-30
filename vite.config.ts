import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from 'vite-plugin-mock'
import path from "path";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/

 


export default defineConfig(({ command, mode }) => {
    
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    // define: {
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },
    server:{
      port:Number(env.VITE_APP_PORT),
      proxy:{
            /**
         * 反向代理解决跨域配置
         * http://localhost:3000/dev-api/users (F12可见请求路径) => http://localhost:8989/users (实际请求后端 API 路径)
         *
         * env.VITE_APP_BASE_API: /dev-api
         * env.VITE_APP_TARGET_URL: http://localhost:8989
         * env.VITE_APP_TARGET_BASE_API: ""
         */
        [env.VITE_APP_BASE_API]: {
              changeOrigin: true,
              target: env.VITE_APP_TARGET_URL,
              rewrite: (path) =>
                path.replace(
                  new RegExp("^" + env.VITE_APP_BASE_API),
                  env.VITE_APP_TARGET_BASE_API
                ),
            },
      }
    },
     resolve:{
    alias:{
      "@":pathSrc,
    }
  },
  plugins: [vue(),
    //自动导入
    AutoImport({
      resolvers:[
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({}),
      ],
      vueTemplate:true,
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue","pinia"],
      eslintrc: {
        enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
        filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
      },
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
    }),
    Components({
      resolvers:[
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"] // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          }),
      ],
      dirs:['src/components','src/views/Pages','src/views/'],
      // dirs:['src/views'],

      dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
  // mock服务
  viteMockServe({
    supportTs: false,
    logger: false,
    mockPath: "./src/mock/",
  }),
  ],
}
  }
);