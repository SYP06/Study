// require的包在node_modules中的koa文件，但并没有直接的index文件，在package.json中看"main"
const Koa = require('koa')
const app = new Koa()

// 自定义中间件
const logger = require('./loger')

app.use(logger())

// app.use中间件，使koa最核心的内容（）中是一个函数【也可以提出来写】
// let fn = async ( ctx ) => {
//   ctx.body = 'hello koa2'
// }
// app.use( fn )



async function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      var data = Math.random()
    if(data){
      resolve(data)
    }else{
      reject('fail...')
    }
    },2000)
  })
}

// ctx是context上下文（请求、响应数据）
app.use( async ( ctx ) => {
  var data = "abc"
  ctx.body = await getData()
})

app.listen(3000)