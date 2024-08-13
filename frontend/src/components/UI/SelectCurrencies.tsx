import { CRYPTOCURRENCIES_OBJECT } from 'shared';
import { useTableContext } from '../context/useTableContext';

export default function SelectCurrencies() {
  const { currencyWithAddresses, currentCurrency, setCurrentCurrency } =
    useTableContext();

  return (
    <ul className="menu menu-vertical rounded-box bg-white lg:menu-horizontal ">
      {currencyWithAddresses?.map((val, id) => {
        return (
          <li key={val.currency}>
            <button
              className={val.currency === currentCurrency ? 'active' : ''}
              onClick={() => {
                setCurrentCurrency(val.currency);
              }}
            >
              {CRYPTOCURRENCIES_OBJECT[val.currency]}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
