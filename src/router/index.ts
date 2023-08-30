import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // @ts-ignore
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: "/article/:id?",
      name: "Article",
      // @ts-ignore
      component: () => import('@/views/ArticlePage.vue'),
    }
  ]
})

export default router
