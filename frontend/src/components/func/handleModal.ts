export const handleCloseModal = (id: string) => {
  const dialog = document?.getElementById(`${id}`) as HTMLDialogElement;
  dialog?.close();
};

export const handleShowModal = (id: string) => {
  const dialog = document?.getElementById(`${id}`) as HTMLDialogElement;
  dialog?.showModal();
};
