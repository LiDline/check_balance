import { z } from 'zod';
import { CRYPTOCURRENCIES } from 'shared';

export const AddAddressSchema = z.object({
  currency: z.enum(CRYPTOCURRENCIES),
  address: z.string().min(1),
});
