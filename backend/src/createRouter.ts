import Router from 'koa-router';

import type { BalanceQuery } from './interfaces/interfaces.balanceQuerySchema';

import checkSchema from './validation/checkSchema';
import {
  BalanceQuerySchema,
  CheckBalanceResponseSchema,
} from './validation/balanceQuerySchema';
import checkBalance from './services/checkBalance';
import { AddAddressSchema } from './validation/addAddressSchema';
import { AddAddress } from './interfaces/interfaces.addAddress';
import addAddress from './services/addAddress';
import getAvailableCurrencies from './services/getAvailableCurrencies';

export default function router() {
  const router: Router = new Router();

  router.get(`/get_available_currencies`, async (ctx) => {
    const res = await getAvailableCurrencies();

    const response = checkSchema(BalanceQuerySchema, res, ctx);

    ctx.body = response;
  });

  router.post(`/add_addresses`, async (ctx) => {
    const postData: AddAddress = checkSchema(
      AddAddressSchema,
      ctx.request.body,
      ctx,
    );

    const res = await addAddress(postData);

    const response = checkSchema(AddAddressSchema, res, ctx);

    ctx.body = response;
  });

  router.get(`/check_balance_from_addresses`, async (ctx) => {
    const decodedString = decodeURIComponent(ctx.query.data as string);
    const data = JSON.parse(decodedString);

    const query: BalanceQuery = checkSchema(BalanceQuerySchema, data, ctx);

    const res = await checkBalance(query);

    const response = checkSchema(CheckBalanceResponseSchema, res, ctx);

    ctx.body = response;
  });

  return router;
}
