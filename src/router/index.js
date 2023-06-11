import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LessonsView from '../views/LessonsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/about',
    name: 'about',
    component: HomeView
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: LessonsView
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
