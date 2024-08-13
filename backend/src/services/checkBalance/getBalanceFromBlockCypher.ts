import type {
  Balance,
  BalanceFromBlockcypherResponse,
  UrlForCheckBalance,
} from '../../interfaces/interfaces.balanceQuerySchema';

import { ERRORS } from 'shared';
import { BalanceFromBlockcypherResponseSchema } from '../../validation/balanceQuerySchema';
import { simpleGetQuery } from './simpleGetQuery';

export default async function getBalanceFromBlockCypher(
  urls: UrlForCheckBalance[],
  convert: number,
): Promise<Balance[]> {
  const res = await Promise.all(
    urls.map(async (obj): Promise<Balance> => {
      const response: BalanceFromBlockcypherResponse | undefined =
        await simpleGetQuery(obj.url, BalanceFromBlockcypherResponseSchema);

      if (!response) {
        return {
          address: obj.address,
          error: ERRORS.balanceProblem,
        };
      }

      return {
        address: obj.address,
        balance: Number(response.balance),
        usdt: Number(response.balance) * convert,
      };
    }),
  );

  return res;
}
