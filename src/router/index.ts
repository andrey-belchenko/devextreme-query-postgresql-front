import { createRouter, createWebHistory } from 'vue-router'
import GridExample from '@/views/GridExample.vue'
import TreeExample from '@/views/TreeExample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GridExample,
    },
    {
      path: '/grid',
      component: GridExample,
    },
    {
      path: '/tree',
      component: TreeExample,
    },
  ],
})

export default router
