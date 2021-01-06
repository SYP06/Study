// 函数声明
function fn1(name: string, age: number, ...params:any){
  var str :string=""; 
  for(var i=0; i< params.length; i++){
     str += params[i] + ""
   }
   console.log(name,age,str);
   
}
fn1('lisi',23,100,"男",1234567)

function fn2():string{
  return "";
}
function fn3():void{

}

// 函数重载 overload
function sayhello(name:string, age:number):string;
function sayhello(name:string):string;

function sayhello(name:any, age?:any){
  if(age){
    console.log(name,age);
  }else{
    console.log(name);
  }
  return ""
}