import Vue from 'vue'
import Vuex from 'vuex'
import { setCityStorage, getCityStorage } from '@/utils/storage'
Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      chooseCity: getCityStorage() || '上海'
    }
  },
  mutations: {
    change (state, city) {
      state.chooseCity = city
      // console.log(city)
      // 城市数据存入本地
      setCityStorage(city)
    }
  }
})

export default store
