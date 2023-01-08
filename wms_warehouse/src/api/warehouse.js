import request from '@/utils/request'

// 获取列表
export const getWareHouseList = (params) => request.get('api/warehouse/page', {
  params
})

// 删除列表
export const WareHouseListDelete = (params) => request.delete('api/warehouse', {
  params
})

// 改变状态/更新列表
export const changeStatus = (params) => request.put('api/warehouse', params)

// 新增列表获取仓库编号
export const WareHouseListAdd = () => request.get('/api/codeFactory/next/CK')

// 新增列表接口
export const WareHouseAdd = (data) => request.post('/api/warehouse', data)

// 获取列表详情
export const GetWareHouseInfo = (id) => request.get(`/api/warehouse/${id}`)
