import { CryptoKeys } from 'shared';
import { CurrencyAddress } from '../database/db';
import { writeError } from './generalMethods/writeError';

export default async function simpleDelete(params: {
  currency?: CryptoKeys;
  address?: string;
}) {
  try {
    await CurrencyAddress.destroy({
      where: params,
    });

    return 200;
  } catch (error: any) {
    writeError(error, `Не удалось удалить ${params}`, false);

    return 500;
  }
}
