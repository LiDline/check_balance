import type { z } from 'zod';
import { DateTime } from 'luxon';

export function writeError(
  zodError: z.ZodError | undefined,
  errorMessage: string,
  needError: boolean,
) {
  const time = DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss');
  const error = time + ' : ' + errorMessage;

  if (needError) {
    throw new Error(error + zodError);
  }

  if (process.env.NODE_ENV !== 'test') {
    console.log(error + zodError);
  }
}
