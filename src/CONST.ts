import {
  CryptoKeys,
  CryptoValues,
} from './interfaces/interfaces.balanceQuerySchema';

export const CRYPTOCURRENCIES_OBJECT = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  tether_trc20: 'USDT TRC20',
  litecoin: 'LTC',
} as const;

export const CRYPTOCURRENCIES = Object.keys(CRYPTOCURRENCIES_OBJECT) as [
  CryptoKeys,
];

export const ABBREVIATIONS = Object.values(CRYPTOCURRENCIES_OBJECT) as [
  CryptoValues,
];

export const URL_FOR_CONVERT =
  'https://api.coingecko.com/api/v3/simple/price?ids=' +
  `${CRYPTOCURRENCIES.join(',')}` +
  '&vs_currencies=usd';

export const ERRORS = {
  convertProblem: 'CONVERT_ERROR',
  balanceProblem: 'BALANCE_ERROR',
};
