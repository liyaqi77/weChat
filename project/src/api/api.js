import wepy from 'wepy'
export const getUserInfo = (uid) => {
  return wepy.request({
    url: 'http://localhost:8080/api/getUserInfo',
    method: 'GET'
  }).then(res => res.data)
}
