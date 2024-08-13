import { useTableContext } from '../context/useTableContext';
import { LoadingSymbol } from './Loading';
import SelectCurrencies from './SelectCurrencies';

export default function SettingsCard() {
  const { currencyWithAddresses } = useTableContext();

  return (
    <div className="mt-10 flex justify-center p-6">
      <div className="card w-full bg-white shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-start">
            {!!currencyWithAddresses ? (
              <SelectCurrencies />
            ) : (
              <div>
                Загрузка доступных валют... <LoadingSymbol />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
