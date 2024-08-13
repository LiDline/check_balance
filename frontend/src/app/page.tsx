'use client';

import { TableProvider } from '@/components/context/TableProvider';
import CurrencyTable from '@/components/CurrencyTable';

export default function Home() {
  return (
    <TableProvider>
      <CurrencyTable />
    </TableProvider>
  );
}
