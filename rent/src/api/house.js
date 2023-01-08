import request from '@/utils/request'

// 获取当前城市房源信息
export const gethouse = data => request.get('/houses', data)

// 获取当前城市区域信息
export const getArea = data => request.get('/area', {
  params: {
    id: data
  }
})
