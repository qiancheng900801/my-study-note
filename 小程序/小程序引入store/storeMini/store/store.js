import Store from "../utils/store"
const store = new Store({
  debug:false,
  state: {
    userInfo: {
      name: '杨前程',
      age: 18,
      sex: 1
    }
  },
  methods: {},
  pageListener: {}
})

module.exports = store