import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCreditCard, faDollarSign, faEllipsisH, faMoneyBill1, faMoneyCheck, faMoneyCheckDollar, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export const VentaView = ({ id }) => {
    const { hanlderVentaSelected, ventaSelected, } = useContext(AppContext)
    const [ventaForm, setventaForm] = useState({})

    useEffect(() => {
        hanlderVentaSelected(id)
        setventaForm(ventaSelected)
    }, [ventaSelected])

    const onInputChange = ({ target }) => {

    }
    const fecha = ventaForm.fecha;
    const fechaFormat = new Date(fecha);

    const fechaFormateada = fechaFormat.toLocaleDateString();
    const opcionesHora = { hour: '2-digit', minute: '2-digit' };
    const horaFormateada = fechaFormat.toLocaleTimeString(undefined, opcionesHora);

    return (
        <>
            <div className=' p-2' style={{ background: 'white', width: '100%', borderRadius: '10px', position: 'relative' }}>
                <p><FontAwesomeIcon icon={faCalendar} /> {fechaFormateada}, {horaFormateada}  <FontAwesomeIcon icon={faUser} style={{marginLeft:'10px'}}/> {ventaForm?.usuario?.nombre}</p>
            </div>
            <div className="row mx-auto mt-3 ">
                <div className="col-md-6">
                    <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        <h5 className="mb-0">Cliente </h5>
                        <div style={{ backgroundColor: ' #f8f8f8', padding: '10px' }} className='mt-4  d-flex flex-column align-items-endflex-column '>
                            <h6>{ventaForm?.cliente?.nombre}</h6>
                            <button className='btn' style={{ color: '#2dba6a' }} >{ventaForm?.cliente?.email}</button>
                            <input value={ventaForm?.cliente?.observaciones} className="form-control" disabled></input>
                        </div>
                    </div>

                    <div className="mb-3" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <h5>Observación</h5>
                        <div className="col-12 d-flex mx-auto" >
                            <div
                                className="form-control mx-auto mt-3"
                                style={{
                                    borderRadius: '8px', minHeight: '100px', overflowY: 'auto', backgroundColor: '#fafbea'

                                }}
                            >
                                {ventaForm.observacion}
                            </div>
                        </div>
                    </div>


                    <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                        <h5 className="mb-0">{ventaForm.items} Items</h5>
                        <table className="table table-borderless mt-2">
                            <tbody >
                                {ventaForm?.productos?.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.itemsProducto}</td>
                                        <td className='col-6'>{item.nombreProducto}</td>
                                        <td>$ {item.precioTotalItem}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3 p-4" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h5>Resumen de la venta</h5>
                            <div className="mt-4">
                                <p>Subtotal de productos</p>
                                <h6>Total</h6>
                            </div>
                        </div>
                        <div className="mt-5 d-flex flex-column align-items-end">
                            <div className="d-flex justify-content-between align-items-baseline ">
                                <p>$ {ventaForm.subTotal}</p>
                            </div>

                            <h6>$ {ventaForm.total}</h6>
                        </div>

                    </div>
                    <div className="mb-3 p-4" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <h5>Metodo de pago</h5>

                        {ventaForm.metodoPago === 'efectivo' && (
                            <div className="form-check mb-3 mt-3 p-2" style={{ backgroundColor: '#f8f8f8' }}>
                                <FontAwesomeIcon icon={faMoneyBill1} />
                                Efectivo
                            </div>
                        )}

                        {ventaForm.metodoPago === 'debito' && (
                            <div className="form-check mb-3 p-2" style={{ backgroundColor: '#f8f8f8' }}>
                                <FontAwesomeIcon icon={faMoneyCheck} />
                                Débito
                            </div>
                        )}

                        {ventaForm.metodoPago === 'credito' && (
                            <div className="form-check mb-3 p-2" style={{ backgroundColor: '#f8f8f8' }}>
                                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                Crédito
                            </div>
                        )}

                        {ventaForm.metodoPago === 'otros' && (
                            <div className="form-check mb-3 p-2" style={{ backgroundColor: '#f8f8f8' }}>
                                <FontAwesomeIcon icon={faCreditCard} />
                                Otros
                            </div>
                        )}




                    </div>
                </div>
            </div>

        </>
    )
}
