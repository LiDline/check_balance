import React from 'react';

import {
  AddAddress,
  BalanceQuery,
  CheckBalanceResponse,
  CryptoKeys,
} from 'shared';

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface TableContextProps {
  serverIsOnline: boolean;
  isError: boolean;
  currencyWithAddresses: BalanceQuery | undefined;
  balance: CheckBalanceResponse | undefined;

  addAddress: (data: AddAddress) => Promise<void>;
  deleteCurrency: (currency: CryptoKeys) => Promise<void>;
  checkBalance: (query: BalanceQuery) => Promise<void>;
}
