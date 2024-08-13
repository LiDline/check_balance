import type { CheckBalance, CoinGeckoResponse, CryptoCurrencies } from 'shared';

import { ERRORS, URL_FOR_CONVERT, CoinGeckoResponseSchema } from 'shared';

import getBitcoinBalance from './checkBalance/getBitcoinBalance';
import { simpleGetQuery } from './checkBalance/simpleGetQuery';
import urlForCheckBalance from './checkBalance/urlForCheckBalance';
import getTetherTrc20Balance from './checkBalance/getTetherTrc20Balance';
import getBalanceFromBlockCypher from './checkBalance/getBalanceFromBlockCypher';

export default async function checkBalance(
  q: CryptoCurrencies,
): Promise<CheckBalance | undefined> {
  const convert: CoinGeckoResponse = await simpleGetQuery(
    URL_FOR_CONVERT,
    CoinGeckoResponseSchema,
  );

  if (!convert) {
    return;
  }

  const urls = q.addresses.map((a) => urlForCheckBalance(q.currency, a));

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
        array: await getBalanceFromBlockCypher(urls, convert.ethereum.usd),
      };

    case 'litecoin':
      return {
        currency: 'litecoin',
        array: await getBalanceFromBlockCypher(urls, convert.litecoin.usd),
      };

    case 'dash':
      return {
        currency: 'dash',
        array: await getBalanceFromBlockCypher(urls, convert.dash.usd),
      };
  }
}
