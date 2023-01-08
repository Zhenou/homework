import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Detail from '@/views/detail'
import Login from '@/views/login'
import Register from '@/views/register'
import Article from '@/views/second/article'
import Collect from '@/views/second/collect'
import Like from '@/views/second/like'
import User from '@/views/second/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/article',
        component: Article
      },
      {
        path: '/collect',
        component: Collect
      },
      {
        path: '/like',
        component: Like
      },
      {
        path: '/user',
        component: User
      }
    ]
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
