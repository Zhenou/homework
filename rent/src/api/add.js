import request from '@/utils/request'

// 图片请求
export const postImg = data => request.post('/houses/image', data, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
// 房屋请求
export const addHouse = data => request.post('/user/houses', data)
