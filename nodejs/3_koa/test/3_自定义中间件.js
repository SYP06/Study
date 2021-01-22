const loger = require('./loger');
const Koa = require('koa');
const app = new Koa();

app.use( loger )

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')