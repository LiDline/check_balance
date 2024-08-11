import { z } from 'zod';
import { checkFetchError } from '../generalMethods/checkFetchError';
import { errorProcessing } from '../generalMethods/errorProcessing';

export async function simpleGetQuery(
  url: string,
  schema: z.ZodSchema,
  needError = false,
): Promise<any | undefined> {
  const options = {
    method: 'GET',
  };

  const response = await fetch(url, options);

  const data = await checkFetchError(
    response,
    `simpleGetQuery.ts для ${url}`,
    needError,
  );

  const res = errorProcessing(
    data,
    schema,
    'Вернулись неожиданные данные для: ' + url,
  );

  return res;
}
