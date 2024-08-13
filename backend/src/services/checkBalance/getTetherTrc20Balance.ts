import {
  Balance,
  ERRORS,
  TetherTrc20BalanceResponse,
  TetherTrc20BalanceResponseSchema,
  UrlForCheckBalance,
} from 'shared';

import { simpleGetQuery } from './simpleGetQuery';

export default async function getTetherTrc20Balance(
  urls: UrlForCheckBalance[],
): Promise<Balance[]> {
  const res = await Promise.all(
    urls.map(async (obj) => {
      const response: TetherTrc20BalanceResponse | undefined =
        await simpleGetQuery(obj.url, TetherTrc20BalanceResponseSchema);

      if (!response) {
        return {
          address: obj.address,
          error: ERRORS.balanceProblem,
        };
      }

      const tokenData = response.data.filter((d) => d.tokenType === 'trc20')[0];

      const balance =
        parseFloat(tokenData.balance) / Math.pow(10, tokenData.tokenDecimal);

      return {
        address: obj.address,
        balance,
        usdt: tokenData.amountInUsd,
      };
    }),
  );

  return res;
}
