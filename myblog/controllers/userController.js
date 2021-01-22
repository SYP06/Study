// const db = require('../models/db');
const model = require('../models/userModel');
const userModel = require('../models/userModel');


module.exports ={
  async login(ctx){
    let { username, password } = ctx.request.body;
  // 2.安全验证
  // 3.连接数据库
  // let results = await getUserData(username, password);
  let results = await model.getUserByNameAndPwd(username,password);
  if(results.length>0){
    // redirect重定向，地址栏会跳转
    // 向session作用域中存入loginUser变量
    ctx.session.loginUser = username;
    ctx.redirect("/")
  }else{
    await ctx.render('error',{
      message:'登录失败，用户名或密码不正确'
    })
  }
 },
 async regist(ctx){
  let { username, password,nickname } = ctx.request.body;
  // 2.安全验证
  if(username.trim().length==0){
    await ctx.render('error',{
      message:'用户名不能为空'
    })
  }else{
    // let results = await saveUser({ username, password,nickname });
    let results = await model.saveUser({ username, password, nickname });
    if (results.insertId) {
      await ctx.render("login", {
        user: loginUser,
      });
    }else{
      await ctx.render('error',{
        message:'注册失败'
      })
    }
  }
 },
 async checkUser(ctx){
   let{username} = ctx.query;
   let results = await userModel.getUserByUsername(username);
    console.log(results);
   if(results.length>0){
     ctx.body = "fail"
   }else{
     ctx.body = "success";
   }
 }
}