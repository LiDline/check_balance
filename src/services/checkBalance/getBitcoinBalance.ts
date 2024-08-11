import { z } from 'zod';

import type {
  Balance,
  UrlForCheckBalance,
} from '../../interfaces/interfaces.balanceQuerySchema';

import { simpleGetQuery } from './simpleGetQuery';
import { ERRORS } from '../../CONST';

export default async function getBitcoinBalance(
  urls: UrlForCheckBalance[],
  convert: number,
): Promise<Balance[]> {
  const res = await Promise.all(
    urls.map(async (obj): Promise<Balance> => {
      const response: number | undefined = await simpleGetQuery(
        obj.url,
        z.number(),
      );

      if (typeof response != 'number') {
        return {
          address: obj.address,
          error: ERRORS.balanceProblem,
        };
      }

      return {
        address: obj.address,
        balance: response,
        usdt: response! * convert,
      };
    }),
  );

  return res;
}
