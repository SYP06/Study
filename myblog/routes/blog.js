const Router = require('@koa/router');
const router = new Router();
let controller = require('../controllers/blogController')


// 首页路由
router.get("/",controller.welcome);

router.get('/blog/detail/:blogId',controller.getBlogDetail);

router.get('/sendBlog', async (ctx)=>{
  await ctx.render('sendBlog')
})


module.exports = router;
