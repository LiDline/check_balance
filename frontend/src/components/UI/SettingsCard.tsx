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
              <>
                <SelectCurrencies />

                {/* <AddCurrencies /> */}

                <button className="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16M4 12h16"
                    />
                  </svg>
                </button>
              </>
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
