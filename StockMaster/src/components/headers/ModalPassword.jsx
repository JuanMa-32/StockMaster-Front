import React, { useContext, useState } from 'react';
import {  ModificarPassword } from './ModificarPassword';
import { AppContext } from '../../context/AppContext';

export const ModalPassword = () => {
  const {  handlerCloseFormPassword} = useContext(AppContext);
  return (
    <>
      <div className='abrir-modal animacion fadeIn'>
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-fullscreen" style={{ width: '28%', marginLeft: 'auto', marginRight: '0' }}>

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Actualizar contraseña</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handlerCloseFormPassword}></button>
              </div>
              <div className="modal-body">
                <ModificarPassword></ModificarPassword>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
