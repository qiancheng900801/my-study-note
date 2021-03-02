// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my: {
      name: "yqc",
      age: "18"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().setWatcher2(this.data, this.watch)
    this.data.my.name = 'qqww'
    this.data.my.age = 20
    this.setData({
      my:this.data.my
    })
  },
  watch: {
    'my.name': (newVal) => {
      console.log(newVal);
    },
    'my.age': (newVal) => {
      console.log(newVal);
    }
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