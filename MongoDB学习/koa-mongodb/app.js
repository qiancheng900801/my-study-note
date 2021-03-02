const Koa = require('koa')
const Router = require('koa-router')
const dbUtils = require('./db')
const app = new Koa()
const router = new Router()
router.get('/', async (ctx, next) => {
  let result = await dbUtils.find()
  ctx.body = result
})
app.use(router.routes()).use(router.middleware())
app.listen(3000, () => {
  console.log(3000);
})