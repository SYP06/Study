// a是返回exports对象， b返回是等号后面赋值
let a = require('./module_a');
// let b = require('./module_b');
let Person = require('./module_b')
// let axios = require('axios')
let axios = require('axios2')

// 自带，可以直接引用
let util = require('util')
let http = require('http')

// console.log(a);
// a.test('hah')

// a.tools.test1('xixix')
// console.log(b);
// b('heh')

// let p1 = new a.Person('lisi',28)
// let p1 = new Person('wangwu',28)
// console.log(p1);
axios.post()