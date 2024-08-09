import Koa from 'koa';

import router from './router';

const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

router();

app.listen(3000);
