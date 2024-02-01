import React, { useContext } from 'react'
import { ListClient } from './ListClient'
import { AppContext } from '../../context/AppContext'

export const ModalSeleccionarClient = () => {
    const {handlerCloseModal}=useContext(AppContext)
    return (
        <>
            <div className='abrir-modal animacion fadeIn'>
                <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-fullscreen" style={{ width: '28%', marginLeft: 'auto', marginRight: '0' }}>

                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Clientes</h5>
                                <button type="button" onClick={() => handlerCloseModal()} className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                            </div>
                            <div className="modal-body">
                               <ListClient></ListClient>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
