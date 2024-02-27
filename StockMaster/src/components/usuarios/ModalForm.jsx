import React, { useContext, useState } from 'react';
import { FormUser } from './FormUser';
import { AppContext } from '../../context/AppContext';

export const ModalForm = () => {
  const { handlerCloseForm } = useContext(AppContext);
  return (
    <>
      <div className='abrir-modal animacion fadeIn'>
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-fullscreen" style={{ width: '28%', marginLeft: 'auto', marginRight: '0' }}>

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Añadir Usuario</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handlerCloseForm}></button>
              </div>
              <div className="modal-body">
                <FormUser></FormUser>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
