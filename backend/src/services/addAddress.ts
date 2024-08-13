import { AddAddress } from 'shared';
import { CurrencyAddress } from '../database/db';

export default async function addAddress(
  postData: AddAddress,
): Promise<AddAddress> {
  const res: AddAddress = (await CurrencyAddress.create(postData)).dataValues;

  return res;
}
