import { CRYPTOCURRENCIES, CRYPTOCURRENCIES_OBJECT } from 'shared';
import { useTableContext } from '../context/useTableContext';
import React from 'react';

export default function AddCurrencies() {
  const { currencyWithAddresses, setCurrencyWithAddresses } = useTableContext();
  const [isOpen, setIsOpen] = React.useState(false);

  const catMenu = React.useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeOpenMenus = (e: MouseEvent) => {
    if (isOpen && !catMenu.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);

  return (
    <div
      className="relative w-full"
      style={{ maxWidth: '200px' }}
      ref={catMenu}
    >
      <button className="btn btn-square btn-outline" onClick={toggleDropdown}>
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

      {isOpen && (
        <ul
          className="dropdown-content menu z-[11] max-h-[200px] w-full flex-row overflow-y-auto rounded-box bg-slate-50 p-2 shadow blur-none absolute top-full left-0 mt-1"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#4a5568 #edf2f7',
          }}
        >
          {CRYPTOCURRENCIES.map((c, i) => (
            <li className="w-full" key={i}>
              <button
                type="button"
                className={
                  currencyWithAddresses?.some((val) => val.currency === c)
                    ? 'active'
                    : ''
                }
                onClick={() => {
                  setCurrencyWithAddresses((prev) => {
                    const isSelected = !!currencyWithAddresses?.filter(
                      (s) => s.currency === c,
                    ).length;

                    const dontHaveAddresses = !!currencyWithAddresses?.filter(
                      (s) => s.currency === c && !!s.addresses.length,
                    ).length;

                    if (isSelected && dontHaveAddresses) {
                      return prev;
                    }

                    if (isSelected && !dontHaveAddresses) {
                      return prev?.filter((p) => p.currency != c);
                    }

                    if (!prev) {
                      return [{ currency: c, addresses: [] }];
                    }

                    return [...prev, { currency: c, addresses: [] }];
                  });
                }}
              >
                {CRYPTOCURRENCIES_OBJECT[c]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
