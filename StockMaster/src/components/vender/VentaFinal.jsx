import { faCreditCard, faDollarSign, faEllipsisH, faMoneyBill, faMoneyBill1, faMoneyCheck, faMoneyCheckDollar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { ModalSeleccionarClient } from './ModalSeleccionarClient';

export const VentaFinal = () => {
    const{ventaFinish,handlerOpenModal,modalView}=useContext(AppContext)
    const [mostrarInfoAdicional, setMostrarInfoAdicional] = useState(false);

    const handleToggleInfo = () => {
        setMostrarInfoAdicional(!mostrarInfoAdicional);
    };

    
    
    return (
        <>
            <div className="row mx-auto">
                <div className="col-md-5">
                {!modalView || <ModalSeleccionarClient/>}
                <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        <h5 className="mb-0">Items</h5>
                        <button type="button" className="btn btn-light" onClick={handlerOpenModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        <FontAwesomeIcon icon={faPlus} />
                        </button>
                        
                    </div>
                    <div className="mb-3" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <h5>Observación</h5>
                        <div className="col-12 d-flex mx-auto">
                            <textarea
                                name=''
                                placeholder='Digite la observación aquí'
                                className="form-control mx-auto"
                                style={{ borderRadius: '8px' }}
                                id="exampleFormControlTextarea1"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div className={`mb-3 p-4 ${mostrarInfoAdicional ? 'expandir' : ''}`} style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        <h5 className="mb-0">Items</h5>
                        <button type="button" className="btn btn-light" onClick={handleToggleInfo} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </button>
                        {mostrarInfoAdicional && (
                            <div className="info-adicional mt-3">
                                <p>Información adicional</p>
                                <p>Otra información</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="mb-3 p-4" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h5>Resumen del pedido</h5>

                            <div className="mt-4">
                                <p>Subtotal:</p>
                                <p>Dar descuentos:</p>
                                <h6>Total:</h6>
                            </div>
                        </div>
                        <div className="mt-5 d-flex flex-column align-items-end">
                            <div className="d-flex justify-content-between align-items-baseline ">
                                <p>$ 4000</p>
                            </div>
                            <div className="mb-2">
                                <button className='btn' style={{ color: '#63E6BE' }}>Dar descuento</button>
                            </div>
                            <h6>$ 2323</h6>
                        </div>
                    </div>
                    <div className="mb-3 p-4" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <h5>Seleccione el método de pago</h5>

                        <div className="form-check mb-3 mt-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <h6 >
                                <FontAwesomeIcon icon={faMoneyBill1} />
                                Efectivo
                            </h6>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <h6 >
                                <FontAwesomeIcon icon={faMoneyCheck} />
                                Débito
                            </h6>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <h6 className="form-check-label" for="flexRadioDefault2">
                                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                Crédito
                            </h6>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <h6 >
                                <FontAwesomeIcon icon={faCreditCard} />
                                Otros
                            </h6>
                        </div>
                        <button className='btn mt-3 mx-2' style={{ background: "#63E6BE", color: 'white' }}><FontAwesomeIcon icon={faDollarSign} /> Finalizar venta</button>
                        <Link to={'/clientePrincipal'} className="btn mt-3 btn-light" >Descartar venta</Link>
                    </div>
                </div>
            </div>
        </>

    )
}
