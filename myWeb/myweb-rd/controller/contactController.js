const contactModel = require("../models/contactModel");

module.exports = {
  async sendContact(ctx){
    let { name, email, subject,comments } = ctx.request.body;
    if (subject.trim().length == 0 || comments.trim().length == 0) {
      ctx.body = '主题或内容不能为空!'
    } else {
      let results = await contactModel.saveContact(name, email, subject,comments);
      console.log(results);
      if (results.insertId>0) {
        ctx.body = {
          state: "success",
        };
      } else {
        ctx.body = {
          state: "fail",
        };

      }
    }

  }
 
}