import request from '@/utils/request'

export const getLoginCode = clientToken => request.get(`/api/user-service/user/imageCode/${clientToken}`, {
  responseType: 'blob'
})
// 登陆
export const login = data => request.post('/api/user-service/user/login', data)
// 信息
export const userInfo = data => request.get(`/api/user-service/user/${data}`)
