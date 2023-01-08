import Vue from 'vue'
import Vuex from 'vuex'
import routerNav from './modules/routerNav'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    routerNav
  },
  plugins: [
    createVuexPersisted({
      storage: window.localStorage
      // reducer (val) {
      //   return {
      //     routerNav: {
      //       defaultActive: val.routerNav.defaultActive,
      //       editableTabs: val.routerNav.editableTabs
      //     }
      //   }
      // }
    })
  ]
})
