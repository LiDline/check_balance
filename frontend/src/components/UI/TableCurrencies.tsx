import { useTableContext } from '../context/useTableContext';
import ButtonsForTable from './ButtonsForTable';
import { LoadingSymbol } from './Loading';

export default function TableCurrencies() {
  const { currencyWithAddresses } = useTableContext();

  return (
    <div className="mt-10 flex justify-center p-6">
      <div
        className="card w-full bg-white shadow-xl"
        style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)' }}
      >
        {!!currencyWithAddresses ? (
          <div className="card-body">
            {currencyWithAddresses?.length ? (
              <ButtonsForTable />
            ) : (
              <div>Нет выбранных валют</div>
            )}

            <div className={`card-actions justify-center`}>{'asfsdfdf'}</div>
          </div>
        ) : (
          <div>
            Загрузка доступных адресов... <LoadingSymbol />
          </div>
        )}
      </div>
    </div>
  );
}
