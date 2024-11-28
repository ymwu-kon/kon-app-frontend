import { createRouter, createWebHistory } from 'vue-router'
import Yakuman from '../views/Yakuman.vue';
import NotFound from '../components/NotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Yakuman,
        },
        {
            path: "/yakuman",
            name: "yakuman",
            component: Yakuman,
        },
        // 添加一个通配符路由用于捕获所有未定义的路由
        {
            path: '/:pathMatch(.*)*', // 注意这里使用了正则表达式来匹配任意路径
            name: 'NotFound',
            component: NotFound,
        },
    ],
})

export default router
