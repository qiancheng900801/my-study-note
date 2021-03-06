// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showNavBar: {
      type: Boolean,
      value: true
    },
    title:{
      type:String,
      value:''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    MenuButton: {},
    ststemInfo: {},
    bottom: 4
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      wx.navigateBack()
    },
    goHome() {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    },
  },
  lifetimes: {
    created() { },
    attached() {
      let MenuButton = wx.getMenuButtonBoundingClientRect()
      let systemInfo = wx.getSystemInfoSync()
      this.setData({
        MenuButton,
        systemInfo
      })
      let navBarHeight = MenuButton.bottom + this.data.bottom
      getApp().store.setState({
        navBarHeight
      })

      
    },
    detached() { }
  }
})
