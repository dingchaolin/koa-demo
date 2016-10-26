var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.get('/name', function (ctx, next) {
  console.log(`进入name路由`);
  ctx.body = 'name is DCL!';
  console.log(`退出name路由`);
});

router.get('/age', function (ctx, next) {
  ctx.body = 'age is 24!';
});

module.exports = router;
