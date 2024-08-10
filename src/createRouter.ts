import Router from 'koa-router';

import { CRYPTOCURRENCIES } from './CONST';

export default function router() {
  const router: Router = new Router();

  for (const value of CRYPTOCURRENCIES) {
    router.get(
      `/${value.toLowerCase()}/check_balance_from_address`,
      async (ctx) => {
        ctx.body = `Checking balance for ${value}`;
      },
    );
  }

  return router;
}
