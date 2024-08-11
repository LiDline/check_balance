import { CurrencyAddress } from '../database/db';
import type { AddAddress } from '../interfaces/interfaces.addAddress';

export default async function addAddress(
  postData: AddAddress,
): Promise<AddAddress> {
  const res: AddAddress = (await CurrencyAddress.create(postData)).dataValues;

  return res;
}
