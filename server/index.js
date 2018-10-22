const Koa = require('koa')
const Router = require('koa-router')
const dotenv = require('dotenv')

dotenv.load()

const middlewares = require('./middlewares')

const app = new Koa()
const router = new Router()

middlewares({ router })

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = () => app