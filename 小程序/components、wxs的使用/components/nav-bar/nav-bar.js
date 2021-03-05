// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
      console.log('back');
    },
    goHome() {
      console.log('home');
    },
  },
  lifetimes: {
    created() { },
    attached() {
      let MenuButton = wx.getMenuButtonBoundingClientRect()
      let systemInfo = wx.getSystemInfoSync()
      console.log(systemInfo);
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
