import type {
  BalanceQuery,
  CoinGeckoResponse,
} from '../interfaces/interfaces.balanceQuerySchema';

import { ERRORS, URL_FOR_CONVERT } from '../CONST';
import getBitcoinBalance from './func/getBitcoinBalance';
import { simpleGetQuery } from './func/simpleGetQuery';
import urlForCheckBalance from './func/urlForCheckBalance';
import { CoinGeckoResponseSchema } from '../validation/balanceQuerySchema';

export default async function checkBalance(query: BalanceQuery) {
  const convert: CoinGeckoResponse = await simpleGetQuery(
    URL_FOR_CONVERT,
    CoinGeckoResponseSchema,
  );

  if (!convert) {
    return {
      error: ERRORS.convertProblem,
    };
  }

  const res = Promise.all(
    query.map(async (q) => {
      const urls = q.address.map((a) => urlForCheckBalance(q.currency, a));

      switch (q.currency) {
        case 'bitcoin':
          return await getBitcoinBalance(urls, convert.bitcoin.usd);

        default:
          break;
      }
    }),
  );

  return res;
}
