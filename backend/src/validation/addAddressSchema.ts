import { z } from 'zod';
import { CRYPTOCURRENCIES } from '../CONST';

export const AddAddressSchema = z.object({
  currency: z.enum(CRYPTOCURRENCIES),
  address: z.string().min(1),
});
