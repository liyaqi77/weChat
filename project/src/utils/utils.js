import wepy from 'wepy'
const getStorageSync = (key) => {
  return wepy.getStorageSync(key)
}
export {
  getStorageSync  
}
