import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { FormUser } from './FormUser';
import { FormPermisos } from './FormPermisos';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export const ModalForm = () => {

  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [mostrarFormulario2, setMostrarFormulario2] = useState(false);

  const handleAvanzar = () => {
    setMostrarFormulario2(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Ejemplo Modal"
      className="modal"
    >
      {mostrarFormulario2 ? (
        <FormPermisos />
      ) : (
        <FormUser onAvanzar={handleAvanzar} />
      )}
    </Modal>
  );
}
