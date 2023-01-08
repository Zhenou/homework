// 引入axios
import axios from 'axios'
import store from '@/store'
// 新建axios实例
const request = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede/'
  // timeout: 5000
})
// console.log(store)
// console.log(token)
// 设置请求拦截器
request.interceptors.request.use(config => {
  const token = store.getters.token
  // console.log(token) //token
  // 请求前做什么
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, err => {
  // 对响应做什么
  return Promise.reject(err)
})

// 设置响应拦截器
request.interceptors.response.use(res => {
  // 对响应成功作什么
  return res
}, err => {
  // 对响应错误做什么
  return Promise.reject(err)
})

export default request
