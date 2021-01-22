// const Router = require('@koa/router');
// const router = new Router();
// const db = require('../models/db');
// let controller = require('../controllers')



// login方法
/* function getUserData(username, password) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(
          // "SELECT * FROM t_user where username='"+username+"' and password=password",
          `SELECT * FROM t_user where username='${username}' and password='${password}'`,
          function (error, results) {
            connection.release();//连接放回到pool中
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          }
        );
      } 
    });
  })
} */

// regist方法
/* function saveUser(user) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(
          `insert into t_user set ?`,user,
          function (error, results) {
            connection.release();////释放连接，放回pool中
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          }
        );
      } 
    });
  })
} */

// 首页方法
/* function getBlogData() {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(
          `SELECT * FROM t_blog`,
          function (error, results) {
            connection.release(); //释放连接，放回pool中
            if (error) {
              reject(err);
            } else {
              resolve(results);
            }
          }
        );
      }
    });
  });
} */



// router 配置render里是ejs文件
// 首页路由
// router.get("/",controller.welcome);

// 登陆路由
/* router.get('/login', async (ctx) => {
  await ctx.render('login')
}); */

// router.post('/login', controller.login);

// 注册路由
/* router.get('/regist', async (ctx)=>{
  await ctx.render('regist')
});
 */
// router.post('/regist', controller.regist)



// module.exports = router;