const router = require('koa-router')();
const { verifyToken } = require("../auth");
// let jwt = require('jsonwebtoken');

router.prefix('/blog')

router.get('/list', verifyToken, async (ctx) => {
  let blogs = [
    { blogId: 11, title: '标题1', content: '内容1111', postTime: new Date() },
    { blogId: 22, title: '标题2', content: '内容1111', postTime: new Date() },
    { blogId: 33, title: '标题3', content: '内容1111', postTime: new Date() },
    { blogId: 44, title: '标题4', content: '内容1111', postTime: new Date() },
  ];
  ctx.body = {
    state: 'success',
    blogs
  }
}),

  router.get('/detail', verifyToken, async (ctx) => {
    let blog = {
      blog_id: ctx.query.blogId,
      title: '标题11',
      content: '内容111',
      post_time: new Date()
    };
    ctx.body = {
      state: 'success',
      blog
    }
  }),





  module.exports = router
