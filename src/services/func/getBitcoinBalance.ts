import { z } from 'zod';

import type { Balance } from '../../interfaces/interfaces.balanceQuerySchema';

import { simpleGetQuery } from './simpleGetQuery';
import { ERRORS } from '../../CONST';

export default async function getBitcoinBalance(
  urls: string[],
  convert: number,
): Promise<Balance[]> {
  const res = await Promise.all(
    urls.map(async (url): Promise<Balance> => {
      const response: number | undefined = await simpleGetQuery(
        url,
        z.number(),
      );

      if (!response) {
        return {
          error: ERRORS.balanceProblem,
        };
      }

      return { balance: response, usdt: response * convert };
    }),
  );

  return res;
}
