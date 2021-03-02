Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  save(e) {

    let that = this;
    wx.getSetting({
      success: function (res) {
        if (
          res.authSetting["scope.writePhotosAlbum"] == undefined ||
          res.authSetting["scope.writePhotosAlbum"] == true
        ) {
          wx.saveImageToPhotosAlbum({
            filePath: '/images/img.png',
            success() {
              wx.showModal({
                content: "图片已保存到相册，赶紧晒一下吧~",
                showCancel: false,
                confirmText: "好的",
                confirmColor: "#333",
                success: function (res1) {
                  if (res1.confirm) {
                    /* 该隐藏的隐藏 */
                    that.setData({
                      maskHidden: true,
                    });
                  }
                },
              });
            },
          });
        } else {
          wx.showModal({
            content: "未进行授权，请授权",
            success(res) {
              if (res.confirm) {
                wx.openSetting({
                  success(res1) {
                    if (res1.authSetting["scope.writePhotosAlbum"]) {} else {}
                  },
                });
              }
            },
          });
        }
      },
    });
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