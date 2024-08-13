import Router from 'koa-router';

import addAddress from './services/addAddress';
import getAvailableCurrencies from './services/getAvailableCurrencies';
import {
  AddAddress,
  AddAddressSchema,
  BalanceQuery,
  BalanceQuerySchema,
  CheckBalanceResponseSchema,
  CryptoKeys,
  DeleteAddressSchema,
  DeleteCurrencySchema,
  SERVER_ENDPOINT,
} from 'shared';
import checkSchema from './utils/checkSchema';
import checkBalance from './services/checkBalance';
import simpleDelete from './services/simpleDelete';

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

  router.delete(`${SERVER_ENDPOINT.deleteAddress}/:address`, async (ctx) => {
    const address: string = checkSchema(
      DeleteAddressSchema,
      ctx.params.address,
      ctx,
    );

    const status = await simpleDelete({ address });

    ctx.status = status;
  });

  router.delete(`${SERVER_ENDPOINT.deleteCurrency}/:currency`, async (ctx) => {
    const currency: CryptoKeys = checkSchema(
      DeleteCurrencySchema,
      ctx.params.currency,
      ctx,
    );

    const status = await simpleDelete({ currency });

    ctx.status = status;
  });

  return router;
}
