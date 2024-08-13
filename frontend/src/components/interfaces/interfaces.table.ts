import React from 'react';

import { AddAddress, BalanceQuery, CryptoKeys } from 'shared';

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface TableContextProps {
  serverIsOnline: boolean;
  isError: boolean;
  currencyWithAddresses: BalanceQuery | undefined;

  addAddress: (data: AddAddress) => Promise<void>;
  deleteCurrency: (currency: CryptoKeys) => Promise<void>;
}
