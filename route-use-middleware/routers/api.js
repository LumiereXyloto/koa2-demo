const router = require('koa-router')() /*引入是实例化路由** 推荐*/

module.exports = router.get('/get/data.json', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'hello world!'
    }
  }
}).get('/get/user.json', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'my name is koa.js!'
    }
  }
})
