import Router from 'koa-router';

import type { BalanceQuery } from './interfaces/interfaces.balanceQuerySchema';

import checkSchema from './validation/checkSchema';
import { BalanceQuerySchema } from './validation/balanceQuerySchema';
import checkBalance from './services/checkBalance';

export default function router() {
  const router: Router = new Router();

  router.get(`/check_balance_from_addresses`, async (ctx) => {
    const query: BalanceQuery = checkSchema(BalanceQuerySchema, ctx);

    const res = await checkBalance(query);

    ctx.body = res;
  });

  return router;
}
