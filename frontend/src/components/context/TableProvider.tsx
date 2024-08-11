import React from 'react';
import axios from 'axios';

import type {
  ChildrenProps,
  TableContextProps,
} from '../interfaces/interfaces.table';
import { TableContext } from './useTableContext';
import checkServerStatus from '../func/checkServerStatus';

export const TableProvider: React.FC<ChildrenProps> = ({ children }) => {
  //---------------------CheckServer-------------------

  const [serverIsOnline, setServerIsOnline] = React.useState(false);

  React.useEffect(() => {
    checkServerStatus(setServerIsOnline);

    const intervalId = setInterval(checkServerStatus, 3000);

    return () => clearInterval(intervalId);
  }, []);

  //---------------------Currency-------------------

  //---------------------------------------------

  const contextValue: TableContextProps = {};

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};
