import Router from 'koa-router';

import addAddress from './services/addAddress';
import getAvailableCurrencies from './services/getAvailableCurrencies';
import {
  AddAddress,
  AddAddressSchema,
  BalanceQuery,
  BalanceQuerySchema,
  CheckBalanceResponseSchema,
  DeleteAddressSchema,
  SERVER_ENDPOINT,
} from 'shared';
import checkSchema from './utils/checkSchema';
import checkBalance from './services/checkBalance';
import deleteAddress from './services/deleteAddress';

export default function router() {
  const router: Router = new Router();

  router.get(SERVER_ENDPOINT.healthcheck, async (ctx) => {
    ctx.body = 'OK';
  });

  router.get(SERVER_ENDPOINT.getAvailableCurrencies, async (ctx) => {
    const res = await getAvailableCurrencies();

    const response = checkSchema(BalanceQuerySchema, res, ctx);

    ctx.body = response;
  });

  router.post(SERVER_ENDPOINT.addAddresses, async (ctx) => {
    const postData: AddAddress = checkSchema(
      AddAddressSchema,
      ctx.request.body,
      ctx,
    );

    const res = await addAddress(postData);

    const response = checkSchema(AddAddressSchema, res, ctx);

    ctx.body = response;
  });

  router.get(SERVER_ENDPOINT.checkBalance, async (ctx) => {
    const decodedString = decodeURIComponent(ctx.query.data as string);
    const data = JSON.parse(decodedString);

    const query: BalanceQuery = checkSchema(BalanceQuerySchema, data, ctx);

    const res = await checkBalance(query);

    const response = checkSchema(CheckBalanceResponseSchema, res, ctx);

    ctx.body = response;
  });

  router.delete(`${SERVER_ENDPOINT.deleteAddress}/:id`, async (ctx) => {
    console.log(ctx.params);

    const id: string = checkSchema(DeleteAddressSchema, ctx.params.id, ctx);

    const status = await deleteAddress(id);

    ctx.status = status;
  });

  return router;
}
