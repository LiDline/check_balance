import { z } from 'zod';
import { CRYPTOCURRENCIES } from '../CONST';

export const AddAddressRequestSchema = z.object({
  currency: z.enum(CRYPTOCURRENCIES),
  address: z.string().min(1),
});
