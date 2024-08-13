import { z } from 'zod';
import { CRYPTOCURRENCIES } from 'shared';

export const GroupedCurrenciesResponseSchema = z.array(
  z.object({
    currency: z.enum(CRYPTOCURRENCIES),
    addresses: z.string(),
  }),
);
