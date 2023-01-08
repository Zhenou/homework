import { login } from '@/api/loginCode'
import { Message } from 'element-ui'
import router from '@/router/index'
export default {
  namespaced: true,
  state: {
    token: null,
    userId: ''
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload.token
      state.userId = payload.userId
    },
    logout (state, payload) {
      state.userId = null
      state.token = null
      Message.success('登出成功')
      router.push('/login')
    }
  },
  actions: {
    async getLogin (context, payload) {
      const res = await login(payload)
      if (res.data.msg === '登录成功') {
        Message.success('登录成功')
        context.commit('setToken', { token: res.data.token, userId: res.data.userId })
        router.push('/home')
      } else {
        Message.warning(res.data.msg)
      }
    }

  }
}
