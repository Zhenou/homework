import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: { id: '1', title: '工作台' }
      },
      {
        path: '/manage-base-info/warehouse',
        name: 'Warehouse',
        component: () => import('@/views/BaseInfo/WareHouse.vue'),
        meta: { id: '2', title: '仓库管理' }
      },
      {
        path: '/manage-base-info/warehouse/details/null',
        name: 'WarehouseNew',
        component: () => import('@/views/BaseInfo/components/WareHouseNew.vue'),
        meta: { id: '2-1', title: '新增管理' }
      },
      {
        path: '/manage-base-info/warehouse/details/:id',
        name: 'WarehouseEdit',
        component: () => import('@/views/BaseInfo/components/WareHouseEdit.vue'),
        meta: { id: '2-2', title: '编辑管理' }
      },
      {
        path: '/manage-base-info/area',
        name: 'Area',
        component: () => import('@/views/BaseInfo/Area.vue'),
        meta: { id: '3', title: '库区管理' }
      },
      {
        path: '/manage-base-info/area/details/:id',
        name: 'AreaNewEdit',
        component: () => import('@/views/BaseInfo/components/AreaNewEdit.vue'),
        meta: { id: '3-1', title: '新增库区' }
      },
      {
        path: '/manage-base-info/location',
        name: 'Location',
        component: () => import('@/views/BaseInfo/Location.vue'),
        meta: { id: '4', title: '库位管理' }
      },
      {
        path: '/manage-base-info/location/details/:id',
        name: 'LocationNewEdit',
        component: () => import('@/views/BaseInfo/components/LocationNewEdit.vue'),
        meta: { id: '4-1', title: '库位管理' }
      },
      {
        path: '/manage-base-info/location',
        name: 'Location',
        component: () => import('@/views/BaseInfo/Location.vue'),
        meta: { id: '4-1', title: '库位管理' }
      },
      {
        path: '/manage-base-info/location-view',
        name: 'LocationView',
        component: () => import('@/views/BaseInfo/LocationView.vue'),
        meta: { id: '5', title: '库位视图' }
      },
      {
        path: '/manage-base-info/goods',
        name: 'Goods',
        component: () => import('@/views/BaseInfo/Goods.vue'),
        meta: { id: '6', title: '货品管理' }
      },
      {
        path: '/manage-base-info/goods-type',
        name: 'GoodsType',
        component: () => import('@/views/BaseInfo/GoodsType.vue'),
        meta: { id: '7', title: '货品类型管理' }
      },
      {
        path: '/manage-business/goods-owner',
        name: 'GoodsOwner',
        component: () => import('@/views/Business/GoodsOwner.vue'),
        meta: { id: '8', title: '货主管理' }
      },
      {
        path: '/manage-business/task-picking',
        name: 'TaskPicking',
        component: () => import('@/views/Business/TaskPicking.vue'),
        meta: { id: '9', title: '承运商管理' }
      },
      {
        path: '/manage-storage/list',
        name: 'List',
        component: () => import('@/views/Storage/List.vue'),
        meta: { id: '10', title: '盘点单' }
      },
      {
        path: '/manage-storage/list-task',
        name: 'ListTask',
        component: () => import('@/views/Storage/ListTask.vue'),
        meta: { id: '11', title: '盘点任务' }
      },
      {
        path: '/manage-storage/storage-lose-profit',
        name: 'StorageLoseProfit',
        component: () => import('@/views/Storage/StorageLoseProfit.vue'),
        meta: { id: '12', title: '库存损益' }
      },
      {
        path: '/manage-storage/latest-storage',
        name: 'LatestStorage',
        component: () => import('@/views/Storage/LatestStorage.vue'),
        meta: { id: '13', title: '实时库存' }
      },
      {
        path: '/manage-storage-in/list-in/list',
        name: 'List',
        component: () => import('@/views/ListIn/List.vue'),
        meta: { id: '14', title: '入库单' }
      },
      {
        path: '/manage-storage-in/list-in/task-receive',
        name: 'TaskReceive',
        component: () => import('@/views/ListIn/TaskReceive.vue'),
        meta: { id: '15', title: '收货任务' }
      },
      {
        path: '/manage-storage-in/list-in/task-add',
        name: 'TaskAdd',
        component: () => import('@/views/ListIn/TaskAdd.vue'),
        meta: { id: '16', title: '上架任务' }
      },
      {
        path: '/manage-storage-out/list-out',
        name: 'ListOut',
        component: () => import('@/views/ListOut/ListOut.vue'),
        meta: { id: '17', title: '出库单' }
      },
      {
        path: '/manage-storage-out/task-picking',
        name: 'TaskPicking',
        component: () => import('@/views/ListOut/TaskPicking.vue'),
        meta: { id: '18', title: '检获任务' }
      },
      {
        path: '/manage-storage-out/manage-task-transfer',
        name: 'MangeTransfer',
        component: () => import('@/views/ListOut/MangeTransfer.vue'),
        meta: { id: '19', title: '交接任务' }
      }

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
