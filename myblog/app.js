const Koa = require('koa')
// 引入ejs模板引擎
const views = require('koa-views')
const path = require('path')
const  staticPath = require('koa-static');//引入koa-static
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');

const app = new Koa();

// 引入路由模块
const blog = require('./routes/blog');
const user = require('./routes/user');



// 加载模板引擎
app.use(views(path.join(__dirname, '/views'), {
  extension: 'ejs'
}))

// cts.body解析中间件
app.use(bodyParser());


// 配置静态资源目录
app.use(staticPath(
  path.join( __dirname,  '/public')
))

app.keys = ['myblog_session_key$$'];
app.use(session(app));


app.use(blog.routes()).use(blog.allowedMethods());
app.use(user.routes()).use(user.allowedMethods());
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')