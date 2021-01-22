const Router = require('@koa/router');
const router = new Router();
let controller = require('../controllers/userController')


// 登陆路由
router.get('/login', async (ctx) => {
  let loginUser = ctx.session.loginUser;
  await ctx.render('login',{
    user:loginUser
  })
});

router.post('/login', controller.login);

// 注册路由
router.get('/regist', async (ctx)=>{
  let loginUser = ctx.session.loginUser;
  await ctx.render('regist',{
    user:loginUser
  });
});

router.post('/regist', controller.regist)


router.get('/checkUser', controller.checkUser)


module.exports = router;
