import { useTableContext } from '../context/useTableContext';

export default function SelectCurrencies() {
  const { currencyWithAddresses, currentCurrency, setCurrentCurrency } =
    useTableContext();

  return (
    <ul className="menu menu-vertical rounded-box bg-white lg:menu-horizontal">
      {currencyWithAddresses?.map((val) => {
        return (
          <li key={val.currency}>
            <button
              onClick={() => {
                setCurrentCurrency(val.currency);
              }}
              className={val.currency === currentCurrency ? 'active' : ''}
            >
              {val.currency}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
