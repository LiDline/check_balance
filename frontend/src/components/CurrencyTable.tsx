import { useTableContext } from './context/useTableContext';
import SettingsCard from './UI/SettingsCard';

export default function CurrencyTable() {
  const { serverIsOnline } = useTableContext();

  return (
    <>
      {serverIsOnline ? (
        <div>
          <SettingsCard />
        </div>
      ) : (
        <div>Загрузка сервера...</div>
      )}
    </>
  );
}
