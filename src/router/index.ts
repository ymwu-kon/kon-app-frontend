import { createRouter, createWebHistory } from 'vue-router'
import Yakuman from '../views/Yakuman.vue'

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
    ],
})

export default router
