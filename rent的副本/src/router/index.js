import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由路径文件
import Login from '@/views/login.vue'
import Find from '@/views/find.vue'
import Home from '@/views/home.vue'
import My from '@/views/my.vue'
import News from '@/views/news.vue'
import Layout from '@/views/layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'home/find',
        component: Find
      },
      {
        path: 'home/news',
        component: News
      },
      {
        path: 'home/my',
        component: My
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
