import { CurrencyAddress, sequelize } from '../database/db';
import { syncCurrencyAddress } from '../database/syncModels';
import { GroupedCurrenciesResponse } from '../interfaces/interfaces.getAvailableCurrencies';

export default async function getAvailableCurrencies() {
  await syncCurrencyAddress();

  const groupedCurrencies = (await CurrencyAddress.findAll({
    attributes: [
      'currency',
      [sequelize.fn('GROUP_CONCAT', sequelize.col('address')), 'addresses'],
    ],
    group: ['currency'],
    raw: true,
  })) as unknown as GroupedCurrenciesResponse;

  const result = groupedCurrencies.map((item) => ({
    currency: item.currency,
    addresses: item.addresses ? item.addresses.split(',') : [],
  }));

  return result;
}
