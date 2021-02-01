const router = require('koa-router')()
const controller = require('../controller/contactController')

router.prefix('/contact')


router.post('/post', controller.sendContact )




module.exports = router
