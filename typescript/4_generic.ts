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

// 使用接口一般是用来做一些约束和限制
/* interface IList{
  length:number;
  add(e:string):string[];
}
class List implements IList{
  elements:string[]=[];
  length=0;
  add(e:string):string[]{
    this.elements.push(e);
    this.length =this.elements.length;
    return this.elements;
  }
}
var list1 = new List();
list1.add('abc');
list1.add('ert');
console.log(list1.length);
 */
// 如何实现向List添加其他数据类型
// string换成any(不推荐，不安全)
// 使用范型

 interface IList<T>{
  length:number;
  add(e:T):T[];
}
class List<T> implements IList<T>{
  elements:T[]=[];
  length=0;
  add(e:T):T[]{
    this.elements.push(e);
    this.length =this.elements.length;
    return this.elements;
  }
}
var list1 = new List<string>();
list1.add('abc');
list1.add('ert');

var list2 = new List<number>()
list2.add(123) 
// list2.add(true)

/* class User{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
}
var user1 =new User('lisi',19);
var user2 = new User('wangwu',17);

var list3 = new List<User>();
list3.add(user1); */
// list3.add(123)