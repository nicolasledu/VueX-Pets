import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    
    component: () => import('../views/Cats.vue')
  },
  {
    path: '/cats/:name',
    name: 'Cat',
    
    component: () => import('../views/Cat.vue')
  },
  {
    path: '/dogs',
    name: 'Dogs',
    
    component: () => import('../views/Dogs.vue')
  },
  {
    path: '/dogs/:name',
    name: 'Dog',
    
    component: () => import('../views/Dog.vue')
  },
  {
    path: '/form',
    name: 'Form',
   
    component: () => import('../views/Form.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router