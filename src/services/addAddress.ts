import { CurrencyAddress } from '../database/db';
import type { AddAddressRequest } from '../interfaces/interfaces.addAddress';

export default async function addAddress(postData: AddAddressRequest) {
  await CurrencyAddress.sync({
    alter: true,
    // force: true,
  });

  const res = await CurrencyAddress.create(postData);

  return res;
}
