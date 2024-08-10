import { z } from 'zod';

import { CRYPTOCURRENCIES_OBJECT } from '../CONST';
import {
  BalanceQuerySchema,
  CoinGeckoResponseSchema,
} from '../validation/balanceQuerySchema';

export type CryptoKeys = keyof typeof CRYPTOCURRENCIES_OBJECT;

export type CryptoValues = (typeof CRYPTOCURRENCIES_OBJECT)[CryptoKeys];

export type BalanceQuery = z.infer<typeof BalanceQuerySchema>;

export type CoinGeckoResponse = z.infer<typeof CoinGeckoResponseSchema>;

export interface Balance {
  address: string;
  error?: string;
  balance?: number;
  usdt?: number;
}

export interface UrlForCheckBalance {
  address: string;
  url: string;
}
