import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Class from '@/views/Class';
import Order from '@/views/Order';
import My from '@/views/My';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};


const router = new VueRouter({

  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/class',
      name: 'class',
      component: Class,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/my',
      name: 'my',
      component: My,
    }
  ]
});

export default router;
