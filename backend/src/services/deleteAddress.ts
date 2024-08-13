import { CurrencyAddress } from '../database/db';
import { writeError } from './generalMethods/writeError';

export default async function deleteAddress(address: string) {
  try {
    await CurrencyAddress.destroy({
      where: { address },
    });

    return 200;
  } catch (error: any) {
    writeError(error, `Не удалось удалить ${address}`, false);

    return 500;
  }
}
