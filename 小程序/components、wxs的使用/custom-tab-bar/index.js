Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      iconPath: "/images/tab-bar/home.png",
      selectedIconPath: "/images/tab-bar/home_select.png",
      pagePath: "/pages/index/index",
      text: "首页"
    }, {
      iconPath: "/images/tab-bar/me.png",
      selectedIconPath: "/images/tab-bar/me_select.png",
      pagePath: "/pages/my/my",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})