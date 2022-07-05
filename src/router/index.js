import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/mainView.vue')
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: () => import('@/views/createPostView.vue')
    },
  ]
})

export default router
