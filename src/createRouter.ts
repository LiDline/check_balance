import Router from 'koa-router';

import type { BalanceQuery } from './interfaces/interfaces.balanceQuerySchema';

import checkSchema from './validation/checkSchema';
import {
  BalanceQuerySchema,
  CheckBalanceResponseSchema,
} from './validation/balanceQuerySchema';
import checkBalance from './services/checkBalance';
import { AddAddressRequestSchema } from './validation/addAddressSchema';
import { AddAddressRequest } from './interfaces/interfaces.addAddress';
import addAddress from './services/addAddress';

export default function router() {
  const router: Router = new Router();

  router.get(`/check_balance_from_addresses`, async (ctx) => {
    const decodedString = decodeURIComponent(ctx.query.data as string);
    const data = JSON.parse(decodedString);

    const query: BalanceQuery = checkSchema(BalanceQuerySchema, data, ctx);

    const res = await checkBalance(query);

    const response = checkSchema(CheckBalanceResponseSchema, res, ctx);

    ctx.body = response;
  });

  router.post(`/add_addresses`, async (ctx) => {
    const postData: AddAddressRequest = checkSchema(
      AddAddressRequestSchema,
      ctx.request.body,
      ctx,
    );

    const res = await addAddress(postData);

    // const response = checkSchema(CheckBalanceResponseSchema, res, ctx);

    ctx.body = res;
  });

  return router;
}
