import React from 'react';

import type { TableContextProps } from '../interfaces/interfaces.table';

export const TableContext = React.createContext<TableContextProps | undefined>(
  undefined,
);

export const useTableContext = () => {
  const context = React.useContext(TableContext);

  if (!context) {
    throw new Error('useTableContext не должен здесь находится!');
  }

  return context;
};
