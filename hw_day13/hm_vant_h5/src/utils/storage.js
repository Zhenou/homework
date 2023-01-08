
const KEY = 'my-token-vant-mobile'

// 按需导出

// 获取本地KEY
export const getToken = () => {
  return localStorage.getItem(KEY)
}

// 设置本地KEY
export const setToken = (newToken) => {
  return localStorage.setItem(KEY, newToken)
}

// 删除KEY
export const delToken = () => {
  localStorage.removeItem(KEY)
}
