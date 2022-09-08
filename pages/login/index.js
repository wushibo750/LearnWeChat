// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },
  getLogin(){
    wx.login({
      success(res){
        if(res.code){
          console.log("返回code===》",res.code);
        }else{        
          console.log("登录失败",res.errMsg);
        }
      }
    })
  },
  // onLoad: function () {
  //   // 获取用户openid
  //   let that = this
  //   wx.login({
  //       success: function (res) { //请求自己后台获取用户openid
  //           console.log(res.code)
  //           wx.request({
  //               url: '开发者后台接口',
  //               data: {
  //                   appid: '自己的微信公众号获取',
  //                   secret: '自己的微信公众号获取',
  //                   code: res.code
  //               },
  //               success: function (response) {
  //                   var openid = response.data.openid;
  //                   console.log('请求获取openid:' + openid); //可以把openid存到本地，方便以后调用
  //                   wx.setStorageSync('openid', openid);
  //                   that.setData({
  //                       openid: "获取到的openid：" + openid
  //                   })
  //               }
  //           })
  //       }
  //   })
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})