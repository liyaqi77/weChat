import { API_HOST } from '../common/config'
import { get } from '../utils/httpClient'
function api(url) {
  return API_HOST + url
}
export const getUserInfo = (uid) => {
  return get(api(`/api/user/info/uid/${uid}`), 'json')
}
