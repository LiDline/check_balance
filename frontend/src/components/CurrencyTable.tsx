import { useTableContext } from './context/useTableContext';
import { LoadingSymbol } from './UI/Loading';
import SettingsCard from './UI/SettingsCard';
import TableCurrencies from './UI/TableCurrencies';

export default function CurrencyTable() {
  const { serverIsOnline } = useTableContext();

  return (
    <>
      {serverIsOnline ? (
        <div>
          <SettingsCard />

          <TableCurrencies />
        </div>
      ) : (
        <div>
          Проверка состояния сервера... <LoadingSymbol />
        </div>
      )}
    </>
  );
}
