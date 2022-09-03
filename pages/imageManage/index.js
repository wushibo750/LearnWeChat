Page({
  data: {
    imgUrls: [],
    src:''
  },
  // 刚进入页面加载
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000,
      mask: true,
      success: function(){
        console.log('加载开始了');
      }
    })
  },
  // 选择图片
  chooseImg: function(){
    var that = this;
    wx.chooseImage({ //选择图片
      count: 9, //最多可以选择图片的张数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        that.setData({
          imgUrls: res.tempFilePaths  //将获取的图片url数组赋值给变量
        });
      },
    })
    wx.hideToast();
  },
  // 预览图片
  previewImg: function(e){
    console.log("组件传值==》",e);
    var current = e.target.dataset.url;  //图片URL
    this.setData({
        src:current
    })
    wx.previewImage({ //预览图片
      current: current, //需要预览的当前图片的url
      urls: this.data.imgUrls,  //需要预览的图片链接列表，所有的图片链接
      success: function(){
        console.log("图片预览成功");
      }
    })
  },
  //长按保存
  longSave:function(res){
     wx.getImageInfo({ //获取图片的信息
          src: current,
          success: function(res){
            console.log(res);  //width,height等属性
            wx.saveImageToPhotosAlbum({ //保存图片
              filePath: res.path, //图片文件路径
              success: function(res){
                wx.showToast({
                  title: '保存成功',
                  icon: 'success',
                  duration: 2000
                })
                console.log('保存图片成功',res);} 
          })
        },
          fail: function(err){
                console.log(err);
                //用户授权
                if (err.errMsg == 'saveImageToPhotosAlbum:fail cancel'){
                  wx.openSetting({
                    success(settingdata) {
                      console.log(settingdata)
                      if (settingdata.authSetting['scope.writePhotosAlbum']) {
                        console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                      } else {
                        console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                      }
                    }
                  })
                }
        }
      })
  } 
})         

