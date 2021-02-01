const blogModel = require("../models/blogModel");

module.exports = {
  async getBlogList(ctx){
    let blogs = await blogModel.getBlogs();
    ctx.body = {
      state:'success',
      blogs
    }
  },
  async getBlogDetail(ctx){
    let { blogId } = ctx.params;
    let results = await blogModel.getBlogById(blogId);
    if(results.length>0){
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
    }else{
      ctx.body = 'error'
    }
    
  }
}