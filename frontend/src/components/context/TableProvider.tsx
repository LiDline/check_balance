import React from 'react';

import type {
  ChildrenProps,
  TableContextProps,
} from '../interfaces/interfaces.table';
import { TableContext } from './useTableContext';
import checkServerStatus from '../func/checkServerStatus';
import {
  AddAddress,
  BalanceQuery,
  CheckBalance,
  CryptoCurrencies,
  CryptoKeys,
  SERVER_ENDPOINT,
} from 'shared';
import simpleGetToServer from '../func/simpleGetToServer';
import simplePostToServer from '../func/simplePostToServer';
import simpleDeleteToServer from '../func/simpleDeleteToServer';

export const TableProvider: React.FC<ChildrenProps> = ({ children }) => {
  //---------------------CheckServer-------------------

  const [serverIsOnline, setServerIsOnline] = React.useState(false);

  React.useEffect(() => {
    const checkStatus = () => checkServerStatus(setServerIsOnline);

    checkStatus();

    const intervalId = setInterval(checkStatus, 3000);

    return () => clearInterval(intervalId);
  }, []);

  //---------------------Available currency------------

  const [isError, setIsError] = React.useState(false);
  const [currencyWithAddresses, setCurrencyWithAddresses] = React.useState<
    BalanceQuery | undefined
  >(undefined);

  const [currentCurrency, setCurrentCurrency] = React.useState<
    CryptoKeys | undefined
  >(currencyWithAddresses?.[0]?.currency ?? undefined);

  React.useEffect(() => {
    if (serverIsOnline) {
      simpleGetToServer('/get_available_currencies_with_addresses')
        .then((data) => {
          setCurrencyWithAddresses(data);
          setCurrentCurrency(data?.[0]?.currency ?? undefined);
        })
        .catch(setIsError);
    }
  }, [serverIsOnline]);

  //----------------------Add address-----------------

  const addAddress = async (data: AddAddress) => {
    try {
      await simplePostToServer('/add_addresses', data);

      setCurrencyWithAddresses((prev) => {
        if (!prev) {
          return prev;
        }

        const withoutCurrency = prev.filter((c) => c.currency != data.currency);
        const currentCurrency = prev.filter(
          (c) => c.currency === data.currency,
        )[0];

        const res: BalanceQuery = [
          ...withoutCurrency,
          {
            ...currentCurrency,
            addresses: [...currentCurrency.addresses, data.address],
          },
        ];

        return res;
      });
    } catch (error) {
      setIsError(true);
    }
  };

  //----------------------Delete currency-----------------

  const deleteCurrency = async (currency: CryptoKeys) => {
    try {
      await simpleDeleteToServer(
        `${SERVER_ENDPOINT.deleteCurrency}/${currency}`,
      );

      setCurrencyWithAddresses((prev) => {
        if (!prev) {
          return prev;
        }

        const withoutCurrency = prev.filter((c) => c.currency != currency);

        return withoutCurrency;
      });
    } catch (error) {
      setIsError(true);
    }
  };

  //----------------------Delete address-----------------

  const deleteAddress = async (currency: CryptoKeys, address: string) => {
    try {
      await simpleDeleteToServer(`${SERVER_ENDPOINT.deleteAddress}/${address}`);

      setCurrencyWithAddresses((prev) => {
        if (!prev) {
          return prev;
        }

        const withoutCurrency = prev.filter((c) => c.currency != currency);
        const currentCurrency = prev.filter((c) => c.currency === currency)[0];

        const res: BalanceQuery = [
          ...withoutCurrency,
          {
            ...currentCurrency,
            addresses: [
              ...currentCurrency.addresses.filter((a) => a != address),
            ],
          },
        ];

        return res;
      });
    } catch (error) {
      setIsError(true);
    }
  };

  //--------------------Check balance-------------------

  const [balance, setBalance] = React.useState<CheckBalance | undefined>(
    undefined,
  );

  const checkBalance = async (query: CryptoCurrencies) => {
    const queryString = encodeURIComponent(JSON.stringify(query));

    try {
      const res = await simpleGetToServer(
        '/check_balance_from_addresses',
        `data=${queryString}`,
      );

      setBalance(res);
    } catch (error) {
      setIsError(true);
    }
  };

  const currentDataForTable =
    currencyWithAddresses?.[
      currencyWithAddresses.findIndex(
        (item) => item.currency === currentCurrency,
      )
    ];

  //---------------------------------------------------

  const contextValue: TableContextProps = {
    serverIsOnline,
    isError,
    currencyWithAddresses,
    balance,
    currentCurrency,
    currentDataForTable,

    addAddress,
    deleteCurrency,
    checkBalance,
    setCurrentCurrency,
    deleteAddress,
    setCurrencyWithAddresses,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};
