// 引入请求配置
import request from '@/utils/request'
// 注册接口
export const login = data => request.post('/user/login', data)
// 获取用户信息接口
export const getInfo = data => request.get('/user')
