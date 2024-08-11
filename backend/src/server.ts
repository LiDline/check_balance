import Koa from 'koa';
import CORS from '@koa/cors';
import dotenv from 'dotenv';
import KoaJSON from 'koa-json';
import bodyParser from 'koa-bodyparser';

import createRouter from './createRouter';
import connectDB from './database/connectDB';

dotenv.config();

/************************************************
 * setup
 ************************************************/

const app = new Koa();

app.use(bodyParser());

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

(async () => {
  try {
    await connectDB();

    app.listen(process.env.SERVER_PORT, () => {
      console.log(
        `Server is listening on http://localhost:${process.env.SERVER_PORT}`,
      );
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
})();
