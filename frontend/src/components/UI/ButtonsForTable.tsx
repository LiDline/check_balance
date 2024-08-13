import { useTableContext } from '../context/useTableContext';

export default function ButtonsForTable() {
  const {
    currencyWithAddresses,
    currentCurrency,
    currentDataForTable,
    deleteCurrency,
    setCurrentCurrency,
    checkBalance,
  } = useTableContext();

  return (
    <div className="flex justify-between">
      <button
        className="btn"
        disabled={!currentDataForTable?.addresses?.length}
        onClick={async () => {
          await checkBalance(currentDataForTable!);
        }}
      >
        Проверить баланс
      </button>

      <button
        className="btn btn-error"
        onClick={async () => {
          !!currentCurrency && (await deleteCurrency(currentCurrency));

          !!currencyWithAddresses?.length &&
            setCurrentCurrency((prev) => {
              const currencyIndex = currencyWithAddresses.findIndex(
                (item) => item.currency === prev,
              );

              if (!!currencyWithAddresses[currencyIndex - 1]) {
                return currencyWithAddresses[currencyIndex - 1].currency;
              } else if (!!currencyWithAddresses[currencyIndex + 1]) {
                return currencyWithAddresses[currencyIndex + 1].currency;
              }

              return undefined;
            });
        }}
      >
        Удалить валюту
      </button>
    </div>
  );
}
