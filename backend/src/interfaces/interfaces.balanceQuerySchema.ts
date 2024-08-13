import { z } from 'zod';

import { CRYPTOCURRENCIES_OBJECT } from 'shared';
import {
  BalanceFromBlockcypherResponseSchema,
  BalanceQuerySchema,
  BalanceSchema,
  CheckBalanceResponseSchema,
  CheckBalanceSchema,
  CoinGeckoResponseSchema,
  TetherTrc20BalanceResponseSchema,
} from '../validation/balanceQuerySchema';

export type CryptoKeys = keyof typeof CRYPTOCURRENCIES_OBJECT;

export type CryptoValues = (typeof CRYPTOCURRENCIES_OBJECT)[CryptoKeys];

export type BalanceQuery = z.infer<typeof BalanceQuerySchema>;

export type CoinGeckoResponse = z.infer<typeof CoinGeckoResponseSchema>;

export type Balance = z.infer<typeof BalanceSchema>;

export interface UrlForCheckBalance {
  address: string;
  url: string;
}

export type BalanceFromBlockcypherResponse = z.infer<
  typeof BalanceFromBlockcypherResponseSchema
>;

export type CheckBalance = z.infer<typeof CheckBalanceSchema>;

export type TetherTrc20BalanceResponse = z.infer<
  typeof TetherTrc20BalanceResponseSchema
>;
export type CheckBalanceResponse = z.infer<typeof CheckBalanceResponseSchema>;
