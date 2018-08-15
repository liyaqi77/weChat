//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        x: 0,
        y: 0,
        username: '',
        password: ''
    },
    tap: function(e) {
        this.setData({
            x: 30,
            y: 30
        });
    },
    onChange: function(e) {
        let slideX = e.detail.x;
        let slideY = e.detail.y;
        let fixedX = 142,
            fixedY = 107;
        let x = fixedX - slideX;
        let y = fixedY - slideY;
        if (x <= 5 && x >= -5 && y <= 5 && y >= -5) {
            this.submitclick()
        }
    },
    onScale: function(e) {
        // console.log(e.detail)
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    user: function(e) {
        this.setData({
            username: e.detail.value
        })

    },
    pwd: function(e) {
        this.setData({
            password: e.detail.value
        })
    },
    submitclick: function() {
        var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        var Pattern = /^[1-9][0-9]{4,10}$/;
        var username = this.data.username;
        if(uPattern.test(this.data.username) && Pattern.test(this.data.password)){
              console.log('登录成功')
        } else if (!uPattern.test(this.data.username)){
          console.log('用户名错误')
        } else if(!Pattern.test(this.data.password)){
        console.log('密码错误')
        }
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    getSize(e) {
        console.log(e)
    }
})