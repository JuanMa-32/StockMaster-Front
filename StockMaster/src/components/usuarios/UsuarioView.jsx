import React, { useContext, useEffect } from 'react'
import { AppContext } from './../../context/AppContext';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UsuarioView = ({ id }) => {
    const { usuarioSelected, handlerUsuarioSelected } = useContext(AppContext)
    useEffect(() => {
        handlerUsuarioSelected(id)
    }, [id])

    return (
        <>
         <div className=' p-2' style={{ background: 'white', width: '100%',  borderRadius: '10px', position: 'relative' }}>
            <p style={{color:'#03b65a'}}><FontAwesomeIcon icon={faEnvelope} /> {usuarioSelected.email}</p>
         </div>
            <div className="row mx-auto mt-3 ">
                <div className="col-md-6">
                    <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        <h5>Datos del usuario</h5>
                        <input value={usuarioSelected.nombre} className="form-control mt-4" disabled></input>
                        <input value={usuarioSelected.email} className="form-control mt-3" disabled></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        <div className="col-6 mb-3 d-flex mx-auto">
                            <p style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>{usuarioSelected.VENTAS}VENTAS</p>
                        </div>
                        <div className="col-6 mb-3 d-flex mx-auto">
                            <h2 >$ {usuarioSelected.facturacion}</h2>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
