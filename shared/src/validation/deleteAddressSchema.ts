import { z } from 'zod';

import { CRYPTOCURRENCIES } from '../CONST';

export const DeleteAddressSchema = z.string().min(1);

export const DeleteCurrencySchema = z.enum(CRYPTOCURRENCIES);
