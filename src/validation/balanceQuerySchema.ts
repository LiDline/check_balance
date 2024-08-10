import { z } from 'zod';

import { CRYPTOCURRENCIES } from '../CONST';

export const BalanceQuerySchema = z.object({
  address: z.string().min(1),
  currency: z.enum(CRYPTOCURRENCIES),
});
