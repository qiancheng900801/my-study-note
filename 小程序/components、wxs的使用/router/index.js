let whitePages = [
  "/pages/index/index",
  "/pages/my/my",
  "/pages/authPage/authPage"
]
const before = function (from, to, next) {
  if (!whitePages.includes(to.path) && !wx.getStorageSync('auth')) {
    next({
      url: '/pages/authPage/authPage'
    })
  } else {
    next()
  }
}
export default before
