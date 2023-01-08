import request from '@/utils/request'

// 工单接口
export const getWorkOrder = data => request.get(`/api/task-service/task/taskReportInfo/${data.start}/${data.end}`)

// 订单量接口
export const getOrderCount = data => request.get('/api/order-service/report/orderCount', {
  params: {
    start: data.start,
    end: data.end
  }
})
// 订单量总额
export const getOrderAmount = data => request.get('/api/order-service/report/orderAmount', {
  params: {
    start: data.start,
    end: data.end
  }
})
// 前十列表
export const getTopTen = data => request.get(`/api/order-service/report/skuTop/${10}/${data.start}/${data.end}`)

// 图表第一个
export const getTableOne = data => request.get(`/api/order-service/report/amountCollect/${data.collectType}/${data.start}/${data.end}`)

// 图表第二个
export const getTableTwo = data => request.get(`/api/order-service/report/regionCollect/${data.start}/${data.end}`)

// 图标第三个
export const getTableThree = data => request.get('/api/vm-service/node/nodeCollect')
