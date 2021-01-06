"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 5; //定义numbere类型的变量：num
var str = "abc"; //定义string类型的变量：str
var bool = true; //定义boolean类型的变量：boolean
// 定义array
var arr = ["abc", 123, true];
var arr2 = [11, 22, 33];
var arr3 = ['aa', 'bb', 'cc'];
// tupple元组:他是一种类型有顺序的数组
// 1 元组中元素的类型可以不一样
// 2 元组中的元素的数据类型与赋值时的数据类型必须一致
var tup = ["abc", 11, true];
// tup[0] = "def";
tup.push("ghi");
// 枚举(首字母大写规范)
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var gender = Gender.Male;
if (gender == Gender.Male) {
    console.log("男");
}
else if (gender == Gender.Female) {
    console.log("女");
}
// any
var x = 5;
x = "abc";
// 1 当编程阶段，你不确定用户输入的类型是什么
// 2 你需要一个使用多种类型的数组
// var arr4:any=['aa',123,true]
// never 表示的是那些用不存在的值
// 抛出error
// function fn2(){
//   throw new Error('出错了')
// }
// fn2();
// 死循环
// function infiniteLoop(){
//   while(true){
//   }
// }
// 类型推论
var xx = 5;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
// 系统进行类型推论后，还是可以push不符合类型的数据
// 如果觉得不严谨可以手动加类型 如 var zoo :Animal[]=...
var zoo = [new Dog(), new Cat()];
zoo.push();
// 联合类型
var xxx = "abc";
xxx = 123;
var arr5 = ['abc', 123];
// 类型断言
var someValue = 'abc';
// 我确定这个位置是string了，强制转换成string类型
console.log(someValue.length);
console.log(someValue); //推荐用as
// console.log(tup[3]);报错
