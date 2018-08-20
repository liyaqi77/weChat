export let getDate = () => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://www.easy-mock.com/mock/5af90718113f91088393ac9a/example/city',
            success: (res) => {
                resolve(res)
            },
            fail: (error) => {
                reject(error)
            }
        })
    })
}