import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { ModalSeleccionarClient } from './ModalSeleccionarClient';

export const CarroDeCompras = () => {
    const { cartItems, handlerDeleteProductCart,setVentaCarro,  handlerOpenModal,modalView } = useContext(AppContext)
    const [total, settotal] = useState(0)
    const navigate=useNavigate()

    useEffect(() => {
        settotal(calculateTotal(cartItems))
    }, [cartItems])

    const calculateTotal = (items) => {
        return items.reduce(
            (accumulator, item) => accumulator + item.product.precio * item.quantity
            , 0);
    }

    const pagar = (event) => {
        event.preventDefault()
        console.log(cartItems);
        console.log(total);
        setVentaCarro(cartItems,total)
        navigate('/checkout/finish')
    } 
    
    return (
        <>
        {!modalView || <ModalSeleccionarClient/>}
            <div className="col-12 d-flex justify-content-end">
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
            <div className="mt-4 text-end">
                <p >Subtotal: $ 4000</p>
                <button className='btn' style={{ color: '#63E6BE' }}>Dar descuento</button>
                <h6 >Total: $ {total}</h6>
                <button className='btn col-12 mb-2' 
                style={{ background: '#63E6BE', color: 'white' }} 
                onClick={ pagar}>Ir al pago</button>
            </div>

        </>

    )
}
