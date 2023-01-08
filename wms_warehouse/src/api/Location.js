import request from '@/utils/request'

// 获取库位列表
export const getLocationList = (params) => request.get('api/location/pageDetail', { params })

// 删除库位列表
export const DeleteLocation = (params) => request.delete('api/location/', { params })

// 修改库位状态/修改库位
export const changeLocationState = (params) => request.put('api/location/', params)

// 新增获取库位编号
export const LocationListAdd = () => request.get('/api/codeFactory/next/KW')

// 获取新增仓库仓库信息
export const getAreaCodeInfo = () => request.get('/api/warehouse/list?status=1')

// 新增仓库库区二级菜单
export const getSecondList = (id) => request.get(`/api/area/list?warehouseId=${id}&status=1`)

// 新增库区
export const addLocationList = (data) => request.post('/api/location', data)

export const getEditDetail = (id) => request.get(`/api/location/${id}`)
