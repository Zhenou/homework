import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icons/yunli.css'
import store from '@/store/index'
import BaiduMap from 'vue-baidu-map'
import { Button, Form, Field, CellGroup, NavBar, Toast, Tabbar, TabbarItem, Image as VanImage, Grid, GridItem, Dialog, Search, Swipe, SwipeItem, Cell, List, IndexBar, IndexAnchor, Area, Popup, Cascader, Uploader, ActionSheet, Picker, DropdownMenu, DropdownItem } from 'vant'

Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Picker)
Vue.use(ActionSheet)
Vue.use(Uploader)
Vue.use(Cascader)
Vue.use(Popup)
Vue.use(Area)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(List)
Vue.use(Cell)

Vue.use(Swipe)
Vue.use(SwipeItem)
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

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'gBGG7nXdvooqP8W6qWtDjI720IRrGDou'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
