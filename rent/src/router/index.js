import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由路径文件
import Login from '@/views/login.vue'
import Find from '@/views/find.vue'
import Home from '@/views/home.vue'
import My from '@/views/my.vue'
import News from '@/views/news.vue'
import Layout from '@/views/layout.vue'
import Rent from '@/views/rent.vue'
import Favorate from '@/views/favorate.vue'
import CCC from '@/views/ccc.vue'
import City from '@/views/city.vue'
import Add from '@/views/add.vue'
import AddSearch from '@/views/addsearch.vue'
import Map from '@/views/map.vue'
import { getStorage } from '@/utils/storage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
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
  },
  {
    path: '/rent',
    component: Rent
  },
  {
    path: '/rent/add',
    component: Add
  },
  {
    path: '/favorate',
    component: Favorate
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/ccc',
    component: CCC
  },
  {
    path: '/rent/search',
    component: AddSearch
  },
  {
    path: '/map',
    component: Map
  }
]

const router = new VueRouter({
  routes
})

const white = ['/home', '/home/find', '/home/news', '/home/my', '/login', '/city']
router.beforeEach((to, from, next) => {
  const token = getStorage()
  // console.log('从' + from.path + '去' + to.path)
  if (token) {
    next()
  } else {
    if (white.includes(to.path)) {
      next()
    } else {
      router.push('/login')
    }
  }
})

export default router
