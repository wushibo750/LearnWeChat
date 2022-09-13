// pages/weChat/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    gender:""
  },
  //多选框
  handleChange(e){
    let gender=e.detail.value;
    console.log("gender的值==>",gender)
    this.setData({
      //gender:gender
      gender
    })
  },
  //输入框的input执行逻辑
  handleInput(e){
    console.log(e.detail.value)  //获取input中的实时数据
    this.setData({
      num:e.detail.value
    })
    console.log("e的值为===>",e)
  },
  //加减按钮事件
  handletap(e){
      const operation=e.currentTarget.dataset.operation  //获取data自定义的变量值
      console.log(operation);
      this.setData({
        num:this.data.num+operation
      })
  },
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