import * as api from '../api/api'
export const getUserInfo = (uid) => {
    var result = api.getUserInfo(uid)
    if (result.code) {
        return result
    }
}