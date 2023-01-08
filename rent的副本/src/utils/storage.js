// 设置默认KEY
const KEY = 'HKZF_TOKEN'

// 获取KEY
export const getStorage = () => {
  return localStorage.getItem(KEY)
}

// 设置KEY
export const setStorage = data => {
  localStorage.setItem(KEY, data)
}

// 删除KEY
export const delStorage = () => {
  localStorage.removeItem(KEY)
}
