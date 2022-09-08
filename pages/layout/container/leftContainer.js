// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
     num:0,
     content:'今日头条',
     message:[
       {
         id:'0',
         text:"今日头条"
       },
       {
         id: '1',
          text:'趣头条'
       },
       {
         id: '2',
         text: '百家号'
       },
       {
         id:'3',
         text: '企鹅号'
       },{
         id:'4',
         text:'大鱼号'
       }
     ]
  },
  clickList:function(e){
    //点击事件中，传递参数，主要
    console.log(e)
    let num = e.target.id
    let text=e.target.text
    console.log("id的值===>",num)
    console.log("text的值===>",text)
    let content=this.data.message[num].text
    this.setData({
      num:num,
      content:content
    })
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

  }
})
