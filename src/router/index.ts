import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes=[
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Sorts.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('@/views/Setting.vue')
  },
  {
    path: '/Bin',
    name: 'Bin',
    component: () => import('@/views/Bin.vue')
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: () => import('@/views/Upload.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Starred',
    name: 'Starred',
    component: () => import('@/views/Home.vue')
  }
]
const router = new VueRouter ({
    routes
})
export default router

