import { CurrencyAddress, sequelize } from '../database/db';
import { GroupedCurrenciesResponse } from '../interfaces/interfaces.getAvailableCurrencies';

export default async function getAvailableCurrencies() {
  const postgree = !!process.env.URL_POSTGREESQL;

  let groupedCurrencies: GroupedCurrenciesResponse;

  if (postgree) {
    groupedCurrencies = (await CurrencyAddress.findAll({
      attributes: [
        'currency',
        [
          sequelize.fn('STRING_AGG', sequelize.col('address'), ','),
          'addresses',
        ],
      ],
      group: ['currency'],
      raw: true,
    })) as unknown as GroupedCurrenciesResponse;
  } else {
    groupedCurrencies = (await CurrencyAddress.findAll({
      attributes: [
        'currency',
        [sequelize.fn('GROUP_CONCAT', sequelize.col('address')), 'addresses'],
      ],
      group: ['currency'],
      raw: true,
    })) as unknown as GroupedCurrenciesResponse;
  }

  (await CurrencyAddress.findAll({
    attributes: [
      'currency',
      [sequelize.fn('STRING_AGG', sequelize.col('address'), ','), 'addresses'],
    ],
    group: ['currency'],
    raw: true,
  })) as unknown as GroupedCurrenciesResponse;

  console.log(groupedCurrencies);

  const result = groupedCurrencies.map((item) => ({
    currency: item.currency,
    addresses: item.addresses ? item.addresses.split(',') : [],
  }));

  return groupedCurrencies;
}
