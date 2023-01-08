import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 选择引入

import { Button, Icon, Tabbar, TabbarItem, Form, Field, NavBar, Toast } from 'vant'

Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Icon)

// 按需引入vant里面的部分
// Vue.use(vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
