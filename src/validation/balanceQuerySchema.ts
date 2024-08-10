import { z } from 'zod';

import { CRYPTOCURRENCIES } from '../CONST';

export const BalanceQuerySchema = z
  .array(
    z.object({
      address: z.array(z.string().min(1)),
      currency: z.enum(CRYPTOCURRENCIES),
    }),
  )
  .default([]);

const UsdSchema = z.object({ usd: z.number() });

export const CoinGeckoResponseSchema = z.object({
  bitcoin: UsdSchema,
  cardano: UsdSchema,
  ethereum: UsdSchema,
  litecoin: UsdSchema,
  tether: UsdSchema,
});
