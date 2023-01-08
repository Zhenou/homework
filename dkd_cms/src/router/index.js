import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/login',
    component: () => import('@/views/LoginIndex.vue')
  },
  {
    path: '/',
    component: () => import('@/views/LayoutIndex.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/HomeIndex.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})
// const token = store.getters.token
// console.log(store)
const whiteList = ['/login', '404']
router.beforeEach(function (to, from, next) {
  const token = store.getters.token
  // console.log('从' + from.path + '去' + to.path)
  if (token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
