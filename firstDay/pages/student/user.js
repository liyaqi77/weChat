// pages/student/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user:{
      username: "Johnny",
      bean:100,
      attention:100,
      image:"../assets/img/pic.jpg",
      loactionOne:'北京市、朝阳区、望京',
      loactionTwo: '阿里巴巴北京电商事业部、前端负责人',
      loactionThree: '精通多套前端框架、熟悉后端技术、从业经验14年、参与过多个大型互联网项目'

    },
    list:[{
      ask:"我的提问",
      answer:'2个新回答',
      list:[{
        read: "已回复",
        list:[{
          name:"什么是绝对地址和相对地址？"
        }]
      }, {
          read: "未回复",
          list: [{
            name: "什么是绝对地址？"
          }]
        }]
    }, {
        ask: "我的导师",
        answer: '2个可见',
        list: [{
          read: "已回复11",
          list: [{
            name: "什么是绝对地址和相对地址？"
          }]
        }]
      }, {
        ask: "我的收藏"
      
      }, {
        ask: "我的动态"
      }]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  jump:function(e){
    let index=e.currentTarget.dataset.index;
    let title = this.data.list[index].ask;
    let context = e.currentTarget.dataset.context;
    console.log(context)
    wx.navigateTo({
      url: '/pages/student/component/quiz?ask='+title,
    })
  }
})