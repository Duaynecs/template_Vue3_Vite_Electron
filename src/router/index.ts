import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/Login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
