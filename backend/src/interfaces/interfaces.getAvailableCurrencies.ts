import { z } from 'zod';

import { GroupedCurrenciesResponseSchema } from '../validation/getAvailableCurrenciesSchema';

export type GroupedCurrenciesResponse = z.infer<
  typeof GroupedCurrenciesResponseSchema
>;
