import { z } from 'zod';

import { AddAddressSchema } from '../validation/addAddressSchema';

export type AddAddress = z.infer<typeof AddAddressSchema>;

export interface GroupedCurrencies {}
