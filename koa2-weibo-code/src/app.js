const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const redis= require('redis')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))
//session 配置
app.keys = ['UIsda-23434*']
app.use(session({
    prefix: 'bolg:sess:', //redis key的前缀,默认是 koa:sess
    cookie: {
        path: '/',
        httpOnly: true, //只能服务端修改cookie
        maxAge: 24 * 60 * 60 * 1000
    },
    /*  ttl:  24 * 60 * 60 * 1000, */
    store: redisStore({
        all: '127.0.0.1:6379'
    })
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

module.exports = app
