import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CallbackView from '../views/CallbackView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/callback',
    name: 'CallbackView',
    component: CallbackView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
