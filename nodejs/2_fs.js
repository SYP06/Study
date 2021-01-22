let fs = require('fs')
// 异步操作
fs.readFile('./a.txt','utf8',function(error,data){
  console.log(data);
})
// 加sybc变成同步操作
var data = fs.readFileSync('./a.txt','utf8')
console.log(data);