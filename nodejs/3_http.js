var http = require('http');
// const { url } = require('inspector');
// http.createServer(function(req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write('<h1>Node.js</h1>');
//  res.end('<p>Hello World</p>');
// }).listen(3000);
// console.log("HTTP server is listening at port 3000.");

/* const { url } = require('inspector');
http.createServer(function(req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(req.url)
 res.end('');
}).listen(80);
console.log("HTTP server is listening at port 80."); */

var querystring = require('querystring');
var util = require('util');
const { url } = require('inspector');
http.createServer(function(req, res) {
 res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
 if(req.url=="/"){;
 res.write('<h1>登录</h1>');
 res.write('<form action="login" method="post">' )
 res.write('<p>用户名：<input type="text" name="username"/></p>');
 res.write('<p>密码：<input type="password" name="password"/></p>');
 res.write('<p><button type="submit">登录</button></p>');
 res.write('</form>' )
 res.end('');
 }else if(req.url=="/login"){
  var post = '';
  req.on('data', function(chunk) {
  post += chunk;
  });
  req.on('end', function() {
  post = querystring.parse(post);
  // var data = util.inspect(post);
  if(post.username =="lisi" && post.password == '1234'){
    res.end('登陆成功');
  }else
    {res.end('登陆失败');}
  }); 
 }
 
}).listen(80);
console.log("HTTP server is listening at port 80.");