import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/Home';
import News from '@/view/News';
import Sport from '@/view/Sport';

import InnerSport from '@/view/InnerSport';
import OutSport from '@/view/OutSport';
import SportHome from '@/view/SportHome';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/sport',
      component: Sport,
      children: [
        {
          path: '/',
          component: SportHome
        },
        {
          path: 'sporthome',
          component: SportHome
        },
        {
          path: 'innersport',
          component: InnerSport
        },
        {
          path: 'outsport',
          component: OutSport
        },
      ]
    },
  ]
});

export default router;
