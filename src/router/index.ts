import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
 
// 静态路由表
const routes: Array<RouteRecordRaw> = [
    {
        // 路由重定向配置
        path: '/',
        component: () => import('../views/HomePage.vue')
    }, {
        path: '/login',
        component: () => import('../views/login.vue')
    }
]
 
// 路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
 
export default router