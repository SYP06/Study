const blogModel = require("../models/blogModel");
const formatTime = require('../utils/dateTimeUtil')

module.exports = {
  async welcome(ctx) {
    // 查询所有文章数据
    let blogs = await blogModel.getBlogs();
    ctx.body = {
      state: 'success',
      blogs
    }
  },
  async getBlogDetail(ctx) {
    let { blogId } = ctx.params;
    let results = await blogModel.getBlogById(blogId);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blogInfo = {
        blog_id,
        title,
        content,
        post_time,
      };
      blogInfo.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blogInfo.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.usernames
        });
      }
      console.log(blogInfo);
      ctx.body = {
        state: 'success',
        blogInfo
      }
    } else {
      // await ctx.render("error", {
      //   message: '该条文章不存在！'
      // });
      ctx.body = 'error'
    }
    
  },
  async sendBlog(ctx){
    let { title, content } = ctx.request.body;
    if (title.trim().length == 0 || content.trim().length == 0) {
      ctx.body = '标题或内容不能为空!'
    } else {
      let results = await blogModel.saveBlog({ title, content });
      if (results.insertId) {
        ctx.body = '发表成功'
      } else {
        ctx.body = '发表失败!'

      }
    }

  }
}