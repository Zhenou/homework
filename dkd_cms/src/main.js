import store from './store'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import '@/utils/element'
import '@/style/iconfont/iconfont.css'
import '@/style/icon/iconfont.css'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
