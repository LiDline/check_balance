import { CurrencyAddress } from './db';

export async function syncCurrencyAddress() {
  await CurrencyAddress.sync({
    alter: true,
    // force: true,
  });
}
