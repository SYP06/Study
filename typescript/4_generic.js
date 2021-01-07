"use strict";
// 实现一个list功能，包含add函数和length属性，可以向add函数中添加字符串
// 有一堆相同的属性和方法，有一个列表的类，每一次使用列表的时候，都去实例化这个类，add当成类的一个方法，length当成列表的类的属性
/* js原生写法
class List{
  length =0;
  element =[];
  add(e){
    this.element.push(e);
    this.length = this.element.length
  }
}
var list1 = new List();
list1.add('abc');
list1.add('ert');
console.log(list1.length);
*/
var List = /** @class */ (function () {
    function List() {
        this.elements = [];
        this.length = 0;
    }
    List.prototype.add = function (e) {
        this.elements.push(e);
        this.length = this.elements.length;
        return this.elements;
    };
    return List;
}());
var list1 = new List();
list1.add('abc');
list1.add('ert');
var list2 = new List();
list2.add(123);
// list2.add(true)
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User('lisi', 19);
var user2 = new User('wangwu', 17);
var list3 = new List();
list3.add(user1);
// list3.add(123)
