import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { ModalSeleccionarClient } from './ModalSeleccionarClient';
import { ModalDescuento } from './ModalDescuento';

export const CarroDeCompras = () => {
    const { cartItems, handlerDeleteProductCart, setVentaCarro,
        handlerOpenModal, modalView, modalDescuento
        , handlerOpenModalDescuento, handlerCloseModalDescuento } = useContext(AppContext)

    const [total, settotal] = useState(0)
    const [subtotal, setsubtotal] = useState(0)
    const [descuentoState, setdescuentoState] = useState(0)
    const [idCliente, setidCliente] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        settotal(calculateTotal(cartItems))
        setsubtotal(calculateTotal(cartItems))
    }, [cartItems])

    const calculateTotal = (items) => {
        return items.reduce(
            (accumulator, item) => accumulator + item.product.precio * item.quantity
            , 0);
    }
    const aplicarDescuento = (descuento) => {
        setdescuentoState(descuento)
        settotal(subtotal - descuento)
    }
    const seleccionarClient = (idClient) => {
        setidCliente(idClient)
    }

    const pagar = (event) => {
        event.preventDefault()
        setVentaCarro(cartItems, total, subtotal, descuentoState, idCliente)
        
        navigate('/checkout/finish')
    }

    return (
        <>
            {!modalView || <ModalSeleccionarClient seleccionarClient={seleccionarClient} />}
            {!modalDescuento || <ModalDescuento handlerCloseModalDescuento={handlerCloseModalDescuento} aplicarDescuento={aplicarDescuento} />}
            <div className="col-12 d-flex justify-content-end mb-3">
                <button className='btn' onClick={() => handlerOpenModal()} style={{ color: '#63E6BE' }}>Seleccionar cliente</button>
            </div>
            <table className="table ">
                <tbody >
                    {cartItems.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.quantity}</td>
                            <td className='col-6'>{item.product.nombre}</td>
                            <td>$ {item.product.precio}</td>
                            <td><button className="btn" onClick={() => handlerDeleteProductCart(item.product.id)} > <FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end" style={{marginTop:'420px'}}>
            <hr />
                {subtotal !== total ? (
                    <>
                        <p>Subtotal: ${subtotal}</p>
                        <p style={{color:'#f20c3f'}}>Descuento: ${subtotal - total} </p>
                    </>
                ) : (
                    <p>Subtotal: ${subtotal}</p>
                )}
                {subtotal === total && <button className='btn' onClick={handlerOpenModalDescuento} style={{ color: '#63E6BE' }}>Dar descuento</button>}
                <h6>Total: ${total}</h6>
                <button className='btn col-12 mb-2' style={{ background: '#63E6BE', color: 'white' }} onClick={pagar}>Ir al pago</button>
            </div>

        </>

    )
}
