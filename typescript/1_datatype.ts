let num :number = 5;//定义numbere类型的变量：num

var str :string ="abc";//定义string类型的变量：str

var bool:boolean = true;//定义boolean类型的变量：boolean

// 定义array
var arr = ["abc",123,true ];
var arr2 :number []=[11,22,33];
var arr3: string[] = ['aa','bb','cc']

// tupple元组:他是一种类型有顺序的数组
// 1 元组中元素的类型可以不一样
// 2 元组中的元素的数据类型与赋值时的数据类型必须一致
var tup: [string,number,boolean] = ["abc",11,true]
// tup[0] = "def";
tup.push("ghi")

// 枚举(首字母大写规范)
enum Gender{
  Male,
  Female
}
var gender = Gender.Male;
if(gender == Gender.Male){
  console.log("男");
}else if(gender == Gender.Female){
  console.log("女");
}

// any
var x:any =5;
x = "abc"
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

class Animal{}
class Dog extends Animal{}
class Cat extends Animal{}
// 系统进行类型推论后，还是可以push不符合类型的数据
// 如果觉得不严谨可以手动加类型 如 var zoo :Animal[]=...
var zoo = [new Dog(), new Cat()]
zoo.push()

// 联合类型
var xxx:string| number ="abc";
xxx =123;

var arr5:(string | number)[] = ['abc',123];

// 类型断言
let someValue:any = 'abc';
// 我确定这个位置是string了，强制转换成string类型
console.log( <string>someValue.length);
console.log(someValue as string);//推荐用as


// console.log(tup[3]);报错


