import store from '@/store'

// 删除顶部
export function DeleteRouter (targetName) {
  store.commit('routerNav/removeTab', targetName)
}
// 改变顶部
export function ChangeRouter (name) {
  store.commit('routerNav/clickChangNav', name)
}
// 新增顶部
export function AddRouter (item) {
  store.commit('routerNav/addTab', item)
}
// 只删除不跳转
export function OnlyDelete (path) {
  store.commit('routerNav/onlyDelete', path)
}
