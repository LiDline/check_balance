import { CurrencyAddress } from '../database/db';
import { syncCurrencyAddress } from '../database/syncModels';
import type { AddAddress } from '../interfaces/interfaces.addAddress';

export default async function addAddress(
  postData: AddAddress,
): Promise<AddAddress> {
  await syncCurrencyAddress();

  const res: AddAddress = (await CurrencyAddress.create(postData)).dataValues;

  return res;
}
