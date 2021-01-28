const userModel = require('../models/userModel');
const { createToken } = require('../auth');


module.exports = {
  async login(ctx) {
    let { username, password } = ctx.request.body;
    if (username.length ==0 || password.length==0) {
      ctx.body = {
        message: '用户或密码不能为空'
      }
    } else {
      let results = await userModel.getUserByNameAndPwd(username, password);
      if (results.length > 0) {
        let payload = {
          userId: Math.random(),
          username,
        };
        var token = createToken(payload);
        ctx.body = {
          state: "success",
          token,
          results,
          user:results[0]
        }
      } else {
        ctx.body = {
          state: 'fail'
        }
      }
    }
  },
  async regist(ctx) {
    let { username, password, nickname } = ctx.request.body;
    if (username.trim().length == 0) {
      ctx.body = '用户名不能为空!'
    } else {
      let results = await userModel.saveUser({ username, password, nickname });
      if (results.insertId) {
        ctx.body = '注册成功'
      } else {
        ctx.body = '注册失败!'

      }
    }
  },
}