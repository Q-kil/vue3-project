import Home from '../views/Home.vue'
import About from '../views/About.vue'
// hash模式：createWebHashHistory
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', component: import('../views/Home.vue')},
  {path: '/about', component: About}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
