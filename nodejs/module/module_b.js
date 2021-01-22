
// module.exports = function(x){
//   console.log(x);
// }
let Person = function(name,age){
  this.name = name;
  this.age = age;
}
Person.prototype.sayhello = function(){
  console.log('hello');
}
module.exports = Person