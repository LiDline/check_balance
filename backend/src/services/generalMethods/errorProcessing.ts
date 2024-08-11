import type { z } from 'zod';

import { writeError } from './writeError';

export function errorProcessing(
  data: any,
  Schema: z.ZodType<any, any>,
  additionalMessage?: string,
  needError = false,
) {
  try {
    const parsedData = Schema.parse(data);

    return parsedData;
  } catch (error) {
    const zodError = error as z.ZodError;

    const errorMessage = `Ошибка валидации данных: ${additionalMessage}.`;

    writeError(zodError, errorMessage, needError);

    return undefined;
  }
}
