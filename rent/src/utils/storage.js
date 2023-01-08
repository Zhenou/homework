// 设置默认KEY
const KEY = 'HKZF_TOKEN'

const city = 'city'

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

// 城市存入本地
export const setCityStorage = data => {
  localStorage.setItem(city, data)
}
// 取出本地城市
export const getCityStorage = () => {
  return localStorage.getItem(city)
}
