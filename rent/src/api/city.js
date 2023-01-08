import request from '@/utils/request'

// 城市列表
export const getCity = data => request.get('/area/city', {
  params: {
    level: data
  }
})
// 热门城市
export const getHot = () => request.get('/area/hot')

// 城市信息
export const getCityInfo = data => request.get('/area/info', {
  params: {
    name: data.name,
    id: data.id
  }
})
