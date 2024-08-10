import type {
  Balance,
  EthereumBalanceResponse,
  UrlForCheckBalance,
} from '../../interfaces/interfaces.balanceQuerySchema';

import { ERRORS } from '../../CONST';
import { EthereumBalanceResponseSchema } from '../../validation/balanceQuerySchema';
import { simpleGetQuery } from './simpleGetQuery';

export default async function getEthereumBalance(
  urls: UrlForCheckBalance[],
  convert: number,
): Promise<Balance[]> {
  const res = await Promise.all(
    urls.map(async (obj): Promise<Balance> => {
      const response: EthereumBalanceResponse | undefined =
        await simpleGetQuery(obj.url, EthereumBalanceResponseSchema);

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
