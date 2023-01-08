import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import user from '@/store/modules/user'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
  getters,
  plugins: [
    createVuexPersisted({
      reducer (val) { // val是根模块的state
        return {
          // user是属性名
          user: {
            token: val.user.token
          }
        }
      }
    })
  ]
})
