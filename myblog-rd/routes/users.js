const router = require('koa-router')()
const userController = require('../controller/userController')



router.prefix('/user');

// 登录
router.post('/login', userController.login)

// 注册
router.post("/regist", userController.regist);


module.exports = router
