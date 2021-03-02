// components/nav-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navList: {
      type: Array,
      value: ['英语']
    },
    navIndex: {
      type: Number,
      value: 0
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
    tabClk(e){
      let {key} = e.currentTarget.dataset
      this.triggerEvent('checkBar',{key})
    }
  }
})
