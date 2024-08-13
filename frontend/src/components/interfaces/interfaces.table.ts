import React from 'react';

import {
  AddAddress,
  BalanceQuery,
  CheckBalance,
  CryptoCurrencies,
  CryptoKeys,
} from 'shared';

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface TableContextProps {
  serverIsOnline: boolean;
  isError: boolean;
  currencyWithAddresses: BalanceQuery | undefined;
  balance: CheckBalance | undefined;
  currentCurrency: CryptoKeys | undefined;
  currentDataForTable: CryptoCurrencies | undefined;

  addAddress: (data: AddAddress) => Promise<void>;
  deleteCurrency: (currency: CryptoKeys) => Promise<void>;
  checkBalance: (query: CryptoCurrencies) => Promise<void>;
  setCurrentCurrency: React.Dispatch<
    React.SetStateAction<CryptoKeys | undefined>
  >;
  deleteAddress: (currency: CryptoKeys, address: string) => Promise<void>;
  setCurrencyWithAddresses: React.Dispatch<
    React.SetStateAction<BalanceQuery | undefined>
  >;
}
