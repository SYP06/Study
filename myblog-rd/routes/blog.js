const router = require('koa-router')();
const { verifyToken } = require("../auth");
const blogController = require('../controller/blogController')

router.prefix('/blog')

router.get('/list', verifyToken, blogController.welcome),

router.get('/detail/:blogId', verifyToken, blogController.getBlogDetail),

router.post('/send', verifyToken, blogController.sendBlog),






  module.exports = router
