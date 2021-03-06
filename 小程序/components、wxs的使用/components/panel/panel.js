// components/panel/panel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showTabBar: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrolltolower() {
      let pages = getCurrentPages()
      let page = pages[pages.length - 1]
      page.onPullDownRefresh()
    }
  }
})
