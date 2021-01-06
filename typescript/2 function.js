"use strict";
// 函数声明
function fn1(name, age) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < params.length; i++) {
        str += params[i] + "";
    }
    console.log(name, age, str);
}
fn1('lisi', 23, 100, "男", 1234567);
function fn2() {
    return "";
}
function fn3() {
}
function sayhello(name, age) {
    if (age) {
        console.log(name, age);
    }
    else {
        console.log(name);
    }
    return "";
}
