import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Journal from '@/pages/Journal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    children: [
      {
        path: '',
        redirect: '/dashboard',
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'journal',
        name: 'journal',
        component: Journal,
      },
    ],
  },
  ],
})

export default router
