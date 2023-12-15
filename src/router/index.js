import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/MainPage.vue'
import PostsPage from '@/pages/PostsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: Main
    },
    {
      path: '/post',
      component: PostsPage
    }
  ]
})

export default router
