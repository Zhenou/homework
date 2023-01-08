import Vue from 'vue';
import Router from 'vue-router';
import About from '@/view/About';
import Contacts from '@/view/Contacts';
import ULR_Router from '@/view/ULR_Router';
import SrouterA from '@/view/SrouterA';
import SrouterB from '@/view/SrouterB';
import SrouterC from '@/view/SrouterC';
import Ctrouter1 from '@/view/Ctrouter1';
import Ctrouter2 from '@/view/Ctrouter2';


Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};




const router = new Router({
  routes: [
    {
      path: '/',
      component: ULR_Router,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contacts',
      component: Contacts,
      children: [
        {
          path: 'sroutera',
          component: SrouterA
        },
        {
          path: 'srouterb',
          component: SrouterB
        },
        {
          path: 'srouterc',
          component: SrouterC,
          children: [
            {
              path: 'ctrouter1',
              component: Ctrouter1,
            },
            {
              path: 'ctrouter2',
              component: Ctrouter2,
            },
          ]

        },
      ]
    },
    {
      path: '/ulr_router',
      component: ULR_Router,
    },
  ]
});
export default router;
