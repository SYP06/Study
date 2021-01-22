// const db = require('../models/db');
// const model = require('../models')

/* module.exports ={
  async welcome(ctx){
    let results = await model.getBlogs();
  await ctx.render("index", {
    blogs: results
  });
  },
  async login(ctx){
    let { username, password } = ctx.request.body;
  // 2.安全验证
  // 3.连接数据库
  // let results = await getUserData(username, password);
  let results = await model.getUserByNameAndPwd(username,password);
  if(results.length>0){
    // redirect重定向，地址栏会跳转
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
  if(!username.trim.length==0){
    await ctx.render('error',{
      message:'用户名不能为空'
    })
  }else{
    // let results = await saveUser({ username, password,nickname });
    let results = await model.saveUsesr;
    if(results.insertId){
      await ctx.render('login');
    }else{
      await ctx.render('error',{
        message:'注册失败'
      })
    }
  }
 }
} */