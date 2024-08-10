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
});

export const TetherTrc20BalanceResponseSchema = z.object({
  total: z.number(),
  data: z.array(
    z.object({
      amount: z.string(),
      quantity: z.string(),
      tokenId: z.string(),
      level: z.string(),
      tokenPriceInUsd: z.number(),
      tokenName: z.string(),
      tokenAbbr: z.string(),
      tokenCanShow: z.number(),
      tokenLogo: z.string(),
      tokenPriceInTrx: z.number(),
      amountInUsd: z.number(),
      balance: z.string(),
      tokenDecimal: z.number(),
      tokenType: z.string(),
      vip: z.boolean(),
    }),
  ),

  contractMap: z.record(z.string(), z.boolean()),

  contractInfo: z.record(
    z.string(),
    z.object({
      isToken: z.boolean(),
      tag1: z.string(),
      tag1Url: z.string(),
      name: z.string(),
      risk: z.boolean(),
      vip: z.boolean(),
    }),
  ),
});
