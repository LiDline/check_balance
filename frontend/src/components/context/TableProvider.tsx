import React from 'react';

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
  React.useEffect(() => {
    if (serverIsOnline) {
    }
  }, [serverIsOnline]);
  //---------------------------------------------

  const contextValue: TableContextProps = {
    serverIsOnline,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};
