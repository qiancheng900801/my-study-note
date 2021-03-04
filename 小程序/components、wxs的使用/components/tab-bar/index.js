// components/tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataSource: {
      type: Array,
      value: ['详情', '列表'],
      observer: (newVar, oldVal) => {
      }
    },
    selectedBar: {
      type: Number,
      value: 0,
      observer: (newVar, oldVal) => {
      }
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
    handleTabBar(e) {
      let { key } = e.currentTarget.dataset
      this.setData({
        tarBarIndex: key
      })
      this.triggerEvent('tabClick', { key })
      console.log(getCurrentPages());
    }
  },
  lifetimes: {
    attached() {

    }
  }
})
