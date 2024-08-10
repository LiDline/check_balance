import {
  CryptoKeys,
  CryptoValues,
} from './interfaces/interfaces.balanceQuerySchema';

export const CRYPTOCURRENCIES_OBJECT = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  tether: 'USDT',
  xrp: 'XRP',
  cardano: 'ADA',
} as const;

export const CRYPTOCURRENCIES = Object.keys(CRYPTOCURRENCIES_OBJECT) as [
  CryptoKeys,
];

export const ABBREVIATIONS = Object.values(CRYPTOCURRENCIES_OBJECT) as [
  CryptoValues,
];
