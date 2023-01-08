import request from '@/utils/request'

// 获取房屋出租列表
export const getMyrent = () => request.get('/user/houses')
// 获取房屋收藏列表
export const getFavorate = () => request.get('/user/favorites')
