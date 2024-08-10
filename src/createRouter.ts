import Router from 'koa-router';

import checkSchema from './validation/checkSchema';
import { BalanceQuerySchema } from './validation/balanceQuerySchema';

export default function router() {
  const router: Router = new Router();

  router.get(`/check_balance_from_address`, async (ctx) => {
    checkSchema(BalanceQuerySchema, ctx.query, ctx);

    ctx.body = `Checking balance for ${0}`;
  });

  return router;
}
