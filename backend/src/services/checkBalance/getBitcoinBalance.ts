import { z } from 'zod';

import { simpleGetQuery } from './simpleGetQuery';
import { Balance, ERRORS, UrlForCheckBalance } from 'shared';

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
