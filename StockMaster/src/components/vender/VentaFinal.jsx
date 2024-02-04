import { faCreditCard, faDollarSign, faEllipsisH, faMoneyBill1, faMoneyCheck, faMoneyCheckDollar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { ModalSeleccionarClient } from './ModalSeleccionarClient';
import { ModalDescuento } from './ModalDescuento';

export const VentaFinal = () => {
    const { ventaFinish, handlerOpenModal, modalView, cartItems, venta,
        clientes, todosClientes, modalDescuento, handlerOpenModalDescuento
        , handlerCloseModalDescuento, restablecerCarro
    } = useContext(AppContext)

    const [mostrarInfoAdicional, setMostrarInfoAdicional] = useState(false);
    const [ventaForm, setventaForm] = useState({})

    useEffect(() => {
        setventaForm({
            ...venta
        })
    }, [])
    useEffect(() => {
        todosClientes()
    }, [])
    const clienteFiltrado = clientes.find(cliente => cliente.id == ventaForm.idCliente);

    const aplicarDescuento = (descuento) => {
        setventaForm({
            ...ventaForm,
            descuento: descuento,
            total: ventaForm.subTotal - descuento
        })
    }
    const handleToggleInfo = () => {
        setMostrarInfoAdicional(!mostrarInfoAdicional);
    };
    const seleccionarClient = (idClient) => {
        setventaForm({
            ...ventaForm,
            idCliente: idClient
        })
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setventaForm({
            ...ventaForm,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        ventaFinish(ventaForm)
        restablecerCarro()
    }
    return (
        <>
            {!modalDescuento || <ModalDescuento handlerCloseModalDescuento={handlerCloseModalDescuento} aplicarDescuento={aplicarDescuento} />}


            <div className="row mx-auto">
                <div className="col-md-5">
                    {!modalView || <ModalSeleccionarClient seleccionarClient={seleccionarClient} />}
                    <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        {ventaForm.idCliente ? (
                            <>
                                <h5 className="mb-0">Cliente </h5>
                                <div style={{ backgroundColor: ' #f8f8f8', padding: '10px' }} className='mt-4  d-flex flex-column align-items-endflex-column '>
                                    <h6>{clienteFiltrado?.nombre}</h6>
                                    <button className='btn' style={{ color: '#2dba6a' }} >{clienteFiltrado?.email}</button>
                                    <input value={clienteFiltrado?.observaciones} className="form-control" disabled></input>
                                </div>
                            </>

                        ) : (
                            <>
                                <h5 className="mb-0">Cliente</h5>
                                <button type="button" className="btn btn-light" onClick={handlerOpenModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="mb-3" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <h5>Observación</h5>
                        <div className="col-12 d-flex mx-auto">
                            <textarea
                                name='observacion'
                                value={ventaForm.observacion}
                                onChange={onInputChange}
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
                            <table className="table table-borderless mt-2">
                                <tbody >
                                    {cartItems.map(item => (
                                        <tr key={item.product.id}>
                                            <td>{item.quantity}</td>
                                            <td className='col-6'>{item.product.nombre}</td>
                                            <td>$ {item.product.precio}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                                <p>$ {ventaForm.subTotal}</p>
                            </div>
                            <div className="mb-2">
                                {ventaForm.descuento ? (
                                    <p style={{ color: '#f20c3f' }}>Descuento: $ {ventaForm.descuento}</p>
                                ) : (
                                    <button
                                        type='button'
                                        onClick={handlerOpenModalDescuento} className='btn' style={{ color: '#63E6BE' }}>Dar descuento</button>
                                )}
                            </div>
                            <h6>$ {ventaForm.total}</h6>
                        </div>

                    </div>
                    <div className="mb-3 p-4" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <h5>Seleccione el método de pago</h5>

                        <div className="form-check mb-3 mt-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="metodoPago"
                                value="efectivo"
                                checked={ventaForm.metodoPago === 'Efectivo'}
                                onChange={onInputChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                <FontAwesomeIcon icon={faMoneyBill1} />
                                Efectivo
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="metodoPago"
                                value="debito"
                                checked={ventaForm.metodoPago === 'Debito'}
                                onChange={onInputChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                <FontAwesomeIcon icon={faMoneyCheck} />
                                Débito
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="metodoPago"
                                value="credito"
                                checked={ventaForm.metodoPago === 'Credito'}
                                onChange={onInputChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                Crédito
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="metodoPago"
                                value="otros"
                                checked={ventaForm.metodoPago === 'Otros'}
                                onChange={onInputChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                <FontAwesomeIcon icon={faCreditCard} />
                                Otros
                            </label>
                        </div>

                        <button onClick={onSubmit} className='btn mt-3 mx-2' style={{ background: "#63E6BE", color: 'white' }}><FontAwesomeIcon icon={faDollarSign} /> Finalizar venta</button>
                        <Link to={'/clientePrincipal'} className="btn mt-3 btn-light" >Descartar venta</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
