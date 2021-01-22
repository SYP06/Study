const db = require('./db');
// 做数据库的增删改查
module.exports = {
  getUserByNameAndPwd(username,password){
    return db.query("SELECT * FROM t_user where username=? and password=?",[username,password])
  },
  saveUser(user){
    return db.query("insert into t_user set ?", user);
  },
  getUserByUsername(username){
    return db.query("SELECT * FROM t_user where username=?",[username]);
  }
}