import { CRYPTOCURRENCIES_OBJECT } from '@/CONST';

export type CryptoKeys = keyof typeof CRYPTOCURRENCIES_OBJECT;

export type CryptoValues = (typeof CRYPTOCURRENCIES_OBJECT)[CryptoKeys];
