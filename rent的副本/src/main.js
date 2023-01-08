import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Form, Field, CellGroup, NavBar, Toast, Tabbar, TabbarItem, Image as VanImage, Grid, GridItem, Dialog, Search } from 'vant'

Vue.use(Search)
// 全局注册
Vue.use(Dialog)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
