import { z } from 'zod';

import { CRYPTOCURRENCIES } from '../CONST';

export const BalanceQuerySchema = z
  .array(
    z.object({
      currency: z.enum(CRYPTOCURRENCIES),
      address: z.array(z.string().min(1)),
    }),
  )
  .default([]);

const UsdSchema = z.object({ usd: z.number() });

export const CoinGeckoResponseSchema = z.object({
  bitcoin: UsdSchema,
  ethereum: UsdSchema,
  litecoin: UsdSchema,
  dash: UsdSchema,
});

export const TetherTrc20BalanceResponseSchema = z.object({
  total: z.number(),
  data: z.array(
    z.object({
      amount: z.string().or(z.number()),
      quantity: z.string().or(z.number()),
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

export const BalanceFromBlockcypherResponseSchema = z.object({
  address: z.string(),
  total_received: z.string().or(z.number()),
  total_sent: z.string().or(z.number()),
  balance: z.string().or(z.number()),
  unconfirmed_balance: z.string().or(z.number()),
  final_balance: z.string().or(z.number()),
  n_tx: z.string().or(z.number()),
  unconfirmed_n_tx: z.string().or(z.number()),
  final_n_tx: z.string().or(z.number()),
});

export const BalanceSchema = z.object({
  address: z.string(),
  error: z.string().optional(),
  balance: z.number().optional(),
  usdt: z.number().optional(),
});

export const CheckBalanceSchema = z.object({
  currency: z.enum(CRYPTOCURRENCIES),
  array: z.array(BalanceSchema),
});

export const CheckBalanceResponseSchema = z
  .array(CheckBalanceSchema)
  .default([])
  .or(z.object({ error: z.string() }));
