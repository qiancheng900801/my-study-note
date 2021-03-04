const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const _ = require('lodash')
const utils = require('./db')
const router = new Router()
const app = new Koa()

router.post('/insert', async (ctx, next) => {
  let data = ctx.request.body
  let result = await utils.insert(data)
  ctx.body = result
})

router.get('/find', async (ctx, next) => {
  let data = ctx.query
  let result = await utils.find(data)
  ctx.body = result
})

router.post('/update', async (ctx, next) => {
  let data = ctx.request.body
  let result = await utils.update(data)
  ctx.body = result
})

app.use(bodyParser())
app.use(router.routes()).use(router.middleware())
app.listen(3000, () => {
  console.log(3000);
})