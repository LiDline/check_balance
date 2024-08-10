import { z } from 'zod';

import { simpleGetQuery } from './simpleGetQuery';

export default async function getBitcoinBalance(
  urls: string[],
  convert: number,
) {
  const res = await Promise.all(
    urls.map(async (url) => {
      const response: number | undefined = await simpleGetQuery(
        url,
        z.number(),
      );

      console.log(response);
    }),
  );
}
