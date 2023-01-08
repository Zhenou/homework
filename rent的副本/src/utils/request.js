// 引入axios
import axios from 'axios'
import { Toast } from 'vant'
import { getStorage } from '@/utils/storage'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 发功请求前做什么
  // 拿到token
  const token = getStorage()
  // 设置请求头里的token
  if (token) {
    config.headers.authorization = token
  }
  // Toast.loading('加载中')
  return config
}, (error) => {
  // 对请求错误做什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 对相应数据做点什么
  if (response.data.status === 200) {
    Toast.success({
      message: '登陆成功',
      forbidClick: true
    })
    // console.log(response)
  }

  return response
}, (error) => {
  // 对响应错误做什么
  if (error.config.timeout === 5000) {
    Toast.fail({
      message: '登陆超时请稍后重试',
      forbidClick: true
    })
  }
  return Promise.reject(error)
})

export default request
