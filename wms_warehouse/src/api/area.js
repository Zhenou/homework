import request from '@/utils/request'

// 获取列表
export const getAreaList = (params) => request.get('/api/area/pageDetail', {
  params
})
// 删除列表
export const AreaListDelete = (params) => request.delete('api/area', {
  params
})

// 改变状态/更新列表
export const AreaStatusChange = (params) => request.put('api/area', params)

// 获取新增仓库编号
export const getAreaAddCode = () => request.get('/api/codeFactory/next/KQ')

// 获取新增仓库仓库信息
export const getAreaCodeInfo = () => request.get('/api/warehouse/list?status=1')

// 新增请求
export const addArea = (data) => request.post('/api/area', data)

// 获取详情
export const getAreaDetails = (params) => request.get(`/api/area/${params}`)

// 导入xls
// export const loadInfoXls = () => request.post('/api/area/importExcel')
