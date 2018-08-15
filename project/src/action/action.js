import * as api from '../api/api'
export const getUserInfo = async(uid) => {
  const result = await api.getUserInfo(uid)
  return result
}
