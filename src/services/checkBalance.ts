import type {
  BalanceQuery,
  CheckBalance,
  CheckBalanceResponse,
  CoinGeckoResponse,
} from '../interfaces/interfaces.balanceQuerySchema';

import { ERRORS, URL_FOR_CONVERT } from '../CONST';
import getBitcoinBalance from './func/getBitcoinBalance';
import { simpleGetQuery } from './func/simpleGetQuery';
import urlForCheckBalance from './func/urlForCheckBalance';
import { CoinGeckoResponseSchema } from '../validation/balanceQuerySchema';
import getTetherTrc20Balance from './func/getTetherTrc20Balance';
import getBalanceFromBlockcypher from './func/getBalanceFromBlockcypher';

export default async function checkBalance(
  query: BalanceQuery,
): Promise<CheckBalanceResponse> {
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
    query.map(async (q): Promise<CheckBalance> => {
      const urls = q.address.map((a) => urlForCheckBalance(q.currency, a));

      switch (q.currency) {
        case 'bitcoin':
          return {
            currency: 'bitcoin',
            array: await getBitcoinBalance(urls, convert.bitcoin.usd),
          };

        case 'tether_trc20':
          return {
            currency: 'tether_trc20',
            array: await getTetherTrc20Balance(urls),
          };

        case 'ethereum':
          return {
            currency: 'ethereum',
            array: await getBalanceFromBlockcypher(urls, convert.ethereum.usd),
          };

        case 'litecoin':
          return {
            currency: 'litecoin',
            array: await getBalanceFromBlockcypher(urls, convert.litecoin.usd),
          };

        case 'dash':
          return {
            currency: 'dash',
            array: await getBalanceFromBlockcypher(urls, convert.dash.usd),
          };
      }
    }),
  );

  return res;
}
