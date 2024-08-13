import { z } from 'zod';

import { CRYPTOCURRENCIES_OBJECT, SERVER_ENDPOINT } from '../CONST';
import {
  BalanceFromBlockcypherResponseSchema,
  BalanceQuerySchema,
  BalanceSchema,
  CheckBalanceSchema,
  CoinGeckoResponseSchema,
  CryptoCurrenciesSchema,
  TetherTrc20BalanceResponseSchema,
} from '../validation/balanceQuerySchema';

export type CryptoKeys = keyof typeof CRYPTOCURRENCIES_OBJECT;

export type CryptoValues = (typeof CRYPTOCURRENCIES_OBJECT)[CryptoKeys];

export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesSchema>;

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

export type EndpointKeys = keyof typeof SERVER_ENDPOINT;

export type EndpointValues = (typeof SERVER_ENDPOINT)[EndpointKeys];
