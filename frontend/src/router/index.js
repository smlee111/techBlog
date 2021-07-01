import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/about'
import Post from '@/pages/post'

const routes = [
  {
    path: '/',
    name: 'Post',
    component: Post
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
