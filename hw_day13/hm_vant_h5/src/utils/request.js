// 引入axios
import axios from 'axios'
// 创建axios实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 添加拦截请求器
request.interceptors.request.use(config => {
  // 在发送请求之前做什么
  return config
}, error => {
  // 处理请求错误信息
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(config => {
  // 对响应数据做什么
  return config.data
}, error => {
  // 处理响应错误信息
  if (error) {
    return error.response
  }
})

export default request
