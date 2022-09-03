// index.js
const app=getApp()
Page({
  data:{
    msg:'',
    imageFile:'',
    imageFiles:[]
  },
  iptFu(e){
    this.setData({
      msg:e.detail.value
    })
    console.log(this.data.msg);
  },
  // 单文件上传
  uploadFile(){
    var that=this;
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        const tempFilePaths = res.tempFiles
        console.log("图片链接===》",tempFilePaths[0].path);
        that.setData({
          imageFile:tempFilePaths[0].path
        })
      }
    })
  },
  // 多文件上传
  uploadFiles(){
    var that=this;
    wx.chooseMessageFile({
    count: 10,
    type: 'image',
    success (res) {
      // tempFilePath可以作为 img 标签的 src 属性显示图片
      const tempFilePaths = res.tempFiles
      console.log("多图片链接===》",tempFilePaths);
      that.setData({
        imageFiles:tempFilePaths
      })
      console.log("data数据==》",that.data.imageFiles);
    }
  })
  },
  onLoad:function(){
    // 调用全局变量
    console.log(app.globalData.name);
    //网络请求
    wx.request({
      url: 'http://localhost:9090/one/data', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
    // 系统API
    wx.getSystemInfo({
      success (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
    let address="https://zhuanlan.zhihu.com/p/398613011"
    //下载文件
    wx.downloadFile({
      url: 'address', //仅为示例，并非真实的资源
      success (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          
        }
      }
    })
  },
  
})
