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
// 对象：一切皆对象
// 类：具有相同的属性和方法的对象的集合
// 对象和类的关系：先有类和构造函数
// 什么时候会定义(或使用)类
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name) {
        this.age = 18; //私有的
        this._gender = 'female';
        this.weight = '60kg';
        this.name = name;
    }
    // 间接访问私有属性
    Person.prototype.growUp = function () {
        this.age++;
        console.log(this.age);
    };
    // 通过get set可以设置限制条件
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            if (gender == 'male' || gender == 'female') {
                this._gender = gender;
            }
            else {
                throw new Error("输入错误");
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.legs = 2; //静态属性可直接用Person.legs获取
    return Person;
}());
var p1 = new Person('lisi');
p1.name = "wangwu";
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
var Animal1 = /** @class */ (function () {
    function Animal1(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal1.prototype.eat = function () {
        console.log("my name is " + this.name + ", i'm eating...");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 重写父类方法
    Dog1.prototype.shout = function () {
        console.log("my name is " + this.name + ", \u6C6A\u6C6A");
    };
    return Dog1;
}(Animal1));
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat1.prototype.climb = function () {
        console.log('climb...');
    };
    Cat1.prototype.shout = function () {
        console.log("喵喵");
    };
    return Cat1;
}(Animal1));
var dog2 = new Dog1('旺财', 2);
dog2.shout();
var cat2 = new Dog1('招财', 3);
cat2.shout();
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monkey.prototype.shout = function () {
        console.log('喳喳');
    };
    return Monkey;
}(Animal1));
var MonkeyKing = /** @class */ (function (_super) {
    __extends(MonkeyKing, _super);
    function MonkeyKing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonkeyKing.prototype.magic = function () {
        console.log('我可以使用猴毛变东西');
    };
    MonkeyKing.prototype.fly = function () {
        console.log('放筋斗云飞...');
    };
    return MonkeyKing;
}(Monkey));
var MachineCat = /** @class */ (function (_super) {
    __extends(MachineCat, _super);
    function MachineCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MachineCat.prototype.fly = function () {
        console.log('脑袋上插个小风扇飞。。。');
    };
    return MachineCat;
}(Cat1));
var SuperMan = /** @class */ (function (_super) {
    __extends(SuperMan, _super);
    function SuperMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperMan.prototype.fly = function () {
        console.log('举双手飞');
    };
    return SuperMan;
}(Person));
var Wukong = new MonkeyKing('悟空', 10000);
Wukong.fly();
var doramon = new MachineCat('哆啦A梦', 3);
doramon.fly();
var kal = new SuperMan('卡尔');
kal.fly();
// 加接口限制，对于后面的值进行检查
// var person1:IPerson ={name:'lisi'};
// var person2:IPerson ={name:'wangwu',age:23};
// var person3 ={name:'wangwu',age:23,gender:'male'}
function checkPerson(person) {
    console.log(person.name, person.age);
}
checkPerson({ name: 'wangwu', age: 23 });
var add = function (a, b) {
    return a + b;
};
var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.fn1 = function () {
    };
    C1.prototype.fn2 = function () {
    };
    return C1;
}());
