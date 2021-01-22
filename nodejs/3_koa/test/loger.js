const fs = require('fs')
function log(ctx) {
  // console.log( ctx.method, ctx.header.host + ctx.url )
  let data = ctx.method + " " + ctx.header.host + " " + ctx.url + " " + new DataCue() + "\n"
  fs.appendfile('./log.txt',data,function(){
    console.log('日志已记录');
  })
}

/* module.exports = function () {
return async function ( ctx, next ) {
  log(ctx);
  // await next()
}
} */

module.exports = async function(cxt,next){
  log(ctx)
}