import { useState } from 'react';
import { CRYPTOCURRENCIES_OBJECT } from 'shared';
import { useTableContext } from '../context/useTableContext';
import { handleCloseModal, handleShowModal } from '../func/handleModal';

export default function AddAddress() {
  const { currentCurrency, addAddress } = useTableContext();

  const [address, setAddress] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <button className="btn" onClick={() => handleShowModal('AddAddress')}>
        Добавить адрес
      </button>
      <dialog id="AddAddress" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-4">
            Добавить адрес для {CRYPTOCURRENCIES_OBJECT[currentCurrency!]}
          </h3>

          <input
            type="text"
            placeholder="Введите адрес..."
            className="input input-bordered w-full"
            value={address}
            onChange={handleInputChange}
          />

          <div className="modal-action">
            <button
              className="btn mr-3"
              onClick={() => {
                setAddress('');

                handleCloseModal('AddAddress');
              }}
            >
              Закрыть
            </button>

            <button
              className="btn btn-neutral"
              onClick={async () => {
                await addAddress({ address, currency: currentCurrency! });

                setAddress('');

                handleCloseModal('AddAddress');
              }}
            >
              Добавить
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
