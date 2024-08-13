import { CryptoKeys, CryptoValues, EndpointKeys } from './interfaces';

export const CRYPTOCURRENCIES_OBJECT = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  tether_trc20: 'USDT TRC20',
  litecoin: 'LTC',
  dash: 'Dash',
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

export const SERVER_ENDPOINT = {
  healthcheck: '/healthcheck',
  getAvailableCurrencies: '/get_available_currencies_with_addresses',
  addAddresses: '/add_addresses',
  checkBalance: '/check_balance_from_addresses',
  deleteAddress: '/delete_address',
  deleteCurrency: '/delete_currency',
} as const;

export const ENDPOINT_KEYS = Object.keys(SERVER_ENDPOINT) as [EndpointKeys];

export const INIT_URL = `http://localhost:${process.env.SERVER_PORT ?? '5000'}`;

export const TABLE_HEADERS = ['Адрес', 'Баланс', 'Баланс в $', 'Действия'];
