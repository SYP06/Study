// 对象：一切皆对象
// 类：具有相同的属性和方法的对象的集合
// 对象和类的关系：先有类和构造函数
// 什么时候会定义(或使用)类
class Person {
  // name: string ="lisi";//默认什么都不写，就是public
  name: string;
  private age: number = 18;//私有的
  private _gender: string = 'female';
  readonly weight: string = '60kg';
  static legs: number = 2; //静态属性可直接用Person.legs获取
  // 构造函数
  constructor(name: string) {
    this.name = name
  }
  // 间接访问私有属性
  growUp() {
    this.age++;
    console.log(this.age);
  }
  // 通过get set可以设置限制条件
  getAge() {
    return this.age
  }
  setAge(age: number) {
    this.age = age
  }
  get gender(): string {
    return this._gender
  }
  set gender(gender: string) {
    if (gender == 'male' || gender == 'female') {
      this._gender = gender
    } else {
      throw new Error("输入错误")
    }
  }
}
var p1 = new Person('lisi');
p1.name = "wangwu"

console.log(p1.name);
// console.log(p1.age);
// p1.growUp()
p1.setAge(20);
console.log(p1.getAge());

p1.gender = 'male';
console.log(p1.gender);

// 只读，修改报错
// p1.weight = '22kg'
// console.log(p1.weight);

console.log(Person.legs);

// 继承
// 抽象类：被设计的目的就是来做继承的
abstract class Animal1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat(): void {
    console.log(`my name is ${this.name}, i'm eating...`);
  }
  abstract shout(): void;
}
class Dog1 extends Animal1 {
  // 重写父类方法
  shout() {
    console.log(`my name is ${this.name}, 汪汪`);
  }

}
class Cat1 extends Animal1 {
  climb() {
    console.log('climb...');
  }
  shout() {
    console.log("喵喵");

  }
}

var dog2 = new Dog1('旺财', 2);
dog2.shout();

var cat2 = new Dog1('招财', 3);
cat2.shout();

class Monkey extends Animal1 {
  shout() {
    console.log('喳喳');
  }
}
// class MonkeyKing extends Monkey{
//   magic(){
//     console.log('我可以使用猴毛变东西');
//   }
//   fly(){
//     console.log('放筋斗云飞...');

//   }
// }
// class MachineCat extends Cat1{
//   changeThing(){
//     console.log('我可以翻口袋变东西');
//   }
//   // fei(){
//   //   console.log('用电扇飞....');
//   // }
//   fly(){
//     console.log('用电扇飞...');

//   }
// }

// 接口：interface
// 接口本身就是抽象的，接口中的所有方法绝对不可以写方法体
interface IFly {
  fly(): void
}
class MonkeyKing extends Monkey implements IFly {
  magic() {
    console.log('我可以使用猴毛变东西');
  }
  fly() {
    console.log('放筋斗云飞...');

  }
}

class MachineCat extends Cat1 implements IFly {
  fly() {
    console.log('脑袋上插个小风扇飞。。。');

  }
}
class SuperMan extends Person implements IFly {
  fly() {
    console.log('举双手飞');
  }
}
var Wukong = new MonkeyKing('悟空', 10000);
Wukong.fly();

var doramon = new MachineCat('哆啦A梦', 3);
doramon.fly();

var kal = new SuperMan('卡尔')
kal.fly();

// 接口类型
// 属性类接口：用来检查变量或参数是否符合接口规范
interface IPerson {
  name: string;
  age: number;
}
// 加接口限制，对于后面的值进行检查
// var person1:IPerson ={name:'lisi'};
// var person2:IPerson ={name:'wangwu',age:23};
// var person3 ={name:'wangwu',age:23,gender:'male'}

function checkPerson(person: IPerson) {
  console.log(person.name, person.age);
}
checkPerson({name:'wangwu',age:23});

// 函数类型接口
// 定义函数要遵循接口里的规则
interface IMath{
  (a:number,b:number):number;
}
var add:IMath = function(a:number,b:number){
  return a + b;
}

// 类类型接口
// 上面接口的例子就是类类型接口

// 接口的继承
interface I1{
  fn1():void;
}
interface I2 extends I1{
  fn1():void;
  fn2():void;
}
class C1 implements I2{
  fn1(){

  }
  fn2(){
    
  }
}