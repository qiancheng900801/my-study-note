Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['详情', '列表', '选项'],
    tabBarIndex: 1,
    navList: ['英语', '数学', '物理', '化学'],
    navIndex: 0
  },
  handleClk(e) {
    this.setData({
      tabBarIndex: e.detail.key
    })
  },
  checkBar(e) {
    let { key } = e.detail
    this.setData({
      navIndex: key
    })
  },
  getAPI1() {
    wx.request({
      url: 'http://127.0.0.1:7001/api1',
      success: res => {
        console.log(res.data);
      }
    })
  },
  getAPI2() {
    console.log('api2');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new Promise((res, rej) => {
      this.getAPI1()
      res()
    }).then(res => {
      this.getAPI2()
      res
    })
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