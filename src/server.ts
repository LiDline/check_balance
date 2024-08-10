import Koa from 'koa';
import CORS from '@koa/cors';
import dotenv from 'dotenv';
import KoaJSON from 'koa-json';

import createRouter from './createRouter';
import connectDB from './database/connectDB';

dotenv.config();

/************************************************
 * database
 ************************************************/

(async () => {
  await connectDB();
})();

/************************************************
 * setup
 ************************************************/

const app = new Koa();

app.use(
  CORS({
    origin: '*',
    credentials: true,
  }),
);

app.use(KoaJSON({ pretty: false, param: 'pretty' }));

/************************************************
 * routes
 ************************************************/

const router = createRouter();

app.use(router.routes());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listening: http://localhost:${process.env.SERVER_PORT}`);
});
