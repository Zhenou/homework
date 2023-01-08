import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from '@/views/Layout';
import Article from '@/views/Article';
import ArticleDetail from '@/views/ArticleDetail';
import Collect from '@/views/Collect';
import Like from '@/views/Like';
import User from '@/views/User';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 进入页面默认打开layout
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "article",
          component: Article,
        },
        {
          path: "like",
          component: Like
        },
        {
          path: "user",
          component: User
        },
        {
          path: "collect",
          component: Collect
        },
      ]
    },
    {
      //设置路径参数
      path: '/articleDetail/:id',
      component: ArticleDetail,
    }
  ]
});

export default router;
