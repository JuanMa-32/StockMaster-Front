import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { ModalSeleccionarClient } from './ModalSeleccionarClient';
import { ModalDescuento } from './ModalDescuento';
import { AuthContext } from '../../auth/context/AuthContext'

export const CarroDeCompras = () => {
    const { cartItems, handlerDeleteProductCart, setVentaCarro,
        handlerOpenModal, modalView, modalDescuento
        , handlerOpenModalDescuento, handlerCloseModalDescuento, stockInsuficiente,
    } = useContext(AppContext)
    const { login } = useContext(AuthContext)
    const [total, settotal] = useState(0)
    const [subtotal, setsubtotal] = useState(0)
    const [descuentoState, setdescuentoState] = useState(0)
    const [idCliente, setidCliente] = useState(0);

    const navigate = useNavigate()

    useEffect(() => {
        settotal(calculateTotal(cartItems))
        setsubtotal(calculateTotal(cartItems))
    }, [cartItems])

    const calculateTotal = (items) => {
        return items.reduce(
            (accumulator, item) => {
                const precioUnitario = item.product.precioPromocion ? item.product.precioPromocion : item.product.precio;
                return accumulator + precioUnitario * item.quantity;
            }, 0
        );
    }

    const aplicarDescuento = (descuento) => {
        setdescuentoState(descuento)
        settotal(subtotal - descuento)
    }
    const seleccionarClient = (idClient) => {
        setidCliente(idClient)
    }
    const eliminarSeleccionClient = () => {
        setidCliente(0)
    }

    const pagar = (event) => {
        event.preventDefault()
        setVentaCarro(cartItems, total, subtotal, descuentoState, idCliente, login.idUser)
        navigate('/checkout/finish')
    }


    return (
        <>
            {!modalView || <ModalSeleccionarClient seleccionarClient={seleccionarClient} />}
            {!modalDescuento || <ModalDescuento handlerCloseModalDescuento={handlerCloseModalDescuento} aplicarDescuento={aplicarDescuento} />}
            {idCliente == 0 ?
                (<div className="col-12 d-flex justify-content-end mb-1">
                    <button className='btn' onClick={() => handlerOpenModal()} style={{ color: '#63E6BE' }}>Seleccionar cliente</button>
                </div>) :
                (
                    <div className="col-12 d-flex justify-content-end mb-3">
                        <button style={{ backgroundColor: '#f8f8f8' }} className='btn' onClick={() => eliminarSeleccionClient()}>Eliminar Seleccion <FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                )}

            <table className="table ">
                <tbody >
                    {cartItems.map(item => (
                        <tr key={item.product.id}>
                            <td> {item.quantity}</td>
                            <td className='col-6'>
                                {item.product.stockActual !== null && item.quantity > item.product.stockActual ? (
                                    <>
                                        <>
                                            {item.product.nombre}
                                            <div style={{ margin: '0px', fontSize: '11px', color: 'red' }} >Stock Insuficiente</div>
                                        </>
                                    </>
                                ) : (
                                    <>
                                        {item.product.nombre}
                                    </>
                                )
                                }
                            </td>

                            <td>
                                {item.product.precioPromocion ? (<>$ {item.product.precioPromocion}
                                    <div style={{ textDecoration: 'line-through', margin: '0px', fontSize: '12px' }} >$ {item.product.precio}</div>
                                </>)
                                    :
                                    (<div >$ {item.product.precio}</div>)
                                }
                            </td>
                            <td><button className="btn" onClick={() => handlerDeleteProductCart(item.product.id)} > <FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end" style={{ marginTop: '420px' }}>
                <hr />
                {subtotal !== total ? (
                    <>
                        <p>Subtotal: ${subtotal}</p>
                        <p style={{ color: '#f20c3f' }}>Descuento: ${subtotal - total} </p>
                    </>
                ) : (
                    <p>Subtotal: ${subtotal}</p>
                )}
                {subtotal === total && <button className='btn' onClick={handlerOpenModalDescuento} style={{ color: '#63E6BE' }}>Dar descuento</button>}
                <h6>Total: ${total}</h6>
                {stockInsuficiente ? (<button
                    className='btn col-12 mb-2'
                    style={{ background: '#f87171', color: 'white' }}
                    onClick={pagar}
                    disabled
                >
                    Stock Insuficiente
                </button>) : (<button
                    className='btn col-12 mb-2'
                    style={{ background: '#63E6BE', color: 'white' }}
                    onClick={pagar}
                >
                    Ir al pago
                </button>)}

            </div>

        </>

    )
}
