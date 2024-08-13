import { TABLE_HEADERS } from 'shared';
import { useTableContext } from '../context/useTableContext';

export default function Table() {
  const { currentDataForTable, balance, deleteAddress, currentCurrency } =
    useTableContext();

  return (
    <div>
      <div
        className="justify-center overflow-x-auto"
        style={{ maxHeight: '600px' }}
      >
        <table className="table text-lg">
          <thead className="text-lg">
            <tr>
              {TABLE_HEADERS.map((h, id) => (
                <th key={id}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentDataForTable?.addresses.map((a, id) => {
              const balanceForAddress = balance?.array.filter(
                (obj) => obj.address === a,
              )[0];

              const isError = !balanceForAddress?.error;

              return (
                <tr key={id}>
                  <th>{a}</th>

                  <th>
                    {isError
                      ? balanceForAddress
                        ? balanceForAddress.balance
                        : '-'
                      : 'Нет данных'}
                  </th>

                  <th>
                    {isError
                      ? balanceForAddress
                        ? balanceForAddress.usdt
                        : '-'
                      : 'Нет данных'}
                  </th>

                  <th>
                    {
                      <button
                        className="btn btn-error"
                        onClick={async () => {
                          await deleteAddress(currentCurrency!, a);
                        }}
                      >
                        Удалить адрес
                      </button>
                    }
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
