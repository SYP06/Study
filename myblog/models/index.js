const db = require('../models/db');
// 做数据库的增删改查
module.exports = {
  getBlogs(){
    return db.query('SELECT * FROM t_blog');
  },
  getUserByNameAndPwd(username,password){
    db.query("SELECT * FROM t_user where username=? and password=?",[username,password])
  },
  saveUsesr(user){
    return db.query('insert into t_user set ?',{ username, password,nickname })
  }
}