import React, { useContext, useEffect, useState } from 'react'
import 'react-phone-input-2/lib/style.css';

import { faArrowDown, faArrowUp, faCartPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClienteFindById } from '../../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';



export const ClienteForm = () => {
    const { addCliente,errorCliente } = useContext(AppContext);
    const { login } = useContext(AuthContext)

    const { id } = useParams('id');
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({})
    const cambiar = ({ target }) => {
        const { name, value } = target;
        setCliente({
            ...cliente,
            [name]: value
        })

    }
    const guardar = async (event) => {
        event.preventDefault();
        addCliente(cliente, login.idNegocio);
    }

    const editar = async (event) => {
        event.preventDefault();
        addCliente(cliente);
    }
    useEffect(() => {
        if (id) {
            traerClientePorId(id)
        }
    }, [])
    const traerClientePorId = async (id) => {
        const respuesta = await ClienteFindById(id);
        setCliente(respuesta.data)
    }
    return (

        <>
            {!id || <div className='container p-2' style={{ background: 'white', width: '100%', borderRadius: '10px', position: 'relative' }}>
                <p style={{ color: '#03b65a' }}><FontAwesomeIcon icon={faEnvelope} /> {cliente.email}</p>
            </div>}
            <form>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <div className="circular-icon mb-5 d-flex align-items-center justify-content-center">
                                    <img src="/card.png" alt="mdo" width="120" height="120" className="rounded-circle me-4" />
                                </div>
                                    <p className='text-danger'>{errorCliente.nombre}</p>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input name='nombre' 
                                    onChange={cambiar} value={cliente.nombre} 
                                    type="text" style={{ borderRadius: '8px' ,borderColor: errorCliente.nombre ? 'red' : '', borderWidth: '2px' }}
                                        className="form-control  mx-auto" id="exampleFormControlInput1"
                                        placeholder="Nombre" />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input name='apellido' onChange={cambiar} value={cliente.apellido} type="text" style={{ borderRadius: '8px' }}
                                        className="form-control  mx-auto" id="exampleFormControlInput1"
                                        placeholder="Apellido" />
                                </div>
                                <div className="col-6 d-flex mx-auto">
                                    <textarea name='observaciones' onChange={cambiar} value={cliente.observaciones} className="form-control form-control-sm mx-auto"
                                        style={{ borderRadius: '8px' }}
                                        id="exampleFormControlTextarea1" rows="3"
                                        placeholder='Observaciones'></textarea>
                                </div>
                            </div>

                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Contacto</h5>
                                <div className="mb-5" >
                                    <p className='text-danger'>{errorCliente.email}</p>
                                    <div className="col-6 mb-3 d-flex mx-auto">
                                        <input name='email' onChange={cambiar} value={cliente.email} type="email"
                                            style={{ borderRadius: '8px',borderColor: errorCliente.email ? 'red' : '', borderWidth: '2px'  }}
                                            className="form-control  mx-auto" id="exampleFormControlInput1"
                                            placeholder="Email" />
                                    </div>
                                    <div className="col-6 mb-3 d-flex mx-auto ">
                                        <input name='telefono' onChange={cambiar} value={cliente.telefono}
                                            placeholder="Número de teléfono"
                                            className="form-control mx-auto"
                                            type='number'
                                        />
                                    </div>
                                </div>
                            </div>

                          
                        </div>

                        <div className="col-md-6">
                        <div className='p-4' style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Dirección</h5>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input
                                        name='direccion' onChange={cambiar} value={cliente.direccion}
                                        type="text"
                                        style={{ borderRadius: '8px' }}
                                        className="form-control  mx-auto" id="exampleFormControlInput1"
                                        placeholder="Dirección" />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input type="text"
                                        name='complemento' onChange={cambiar} value={cliente.complemento}
                                        style={{ borderRadius: '8px' }}
                                        className="form-control mx-auto" id="exampleFormControlInput1"
                                        placeholder="Complemento" />
                                </div>
                                {!id ? <button onClick={guardar} className='btn mt-3 mx-3' style={{ background: "#63E6BE", color: 'white' }}>Nuevo Cliente</button> :
                                    <button onClick={editar} className='btn mt-3 mx-3' style={{ background: "#63E6BE", color: 'white' }}>Actualizar Cliente</button>}
                                <Link to={'/clientePrincipal'} className="btn mt-3 btn-light" >Cancelar</Link>
                            </div>
                            {/* <div className="mb-3 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Cuenta</h5>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <p style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>SALDO ACTUAL</p>
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <h2 >$ 0,00</h2>

                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <button className='btn'><FontAwesomeIcon icon={faArrowUp} style={{ color: '#4fd97d' }} /> Añadir</button>
                                    <button className='btn'><FontAwesomeIcon icon={faArrowDown} style={{ color: '#d30d35' }} /> Sustraer</button>
                                </div>
                            </div>

                            <div className="p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <FontAwesomeIcon icon={faCartPlus} size="2xl" style={{ color: "#63E6BE", }} />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <h6>Este cliente aún no realizó pedidos</h6>
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <button className='btn ' style={{ background: "#63E6BE", color: 'white' }}>Nuevo pedido</button>
                                </div>
                                {!id ? <button onClick={guardar} className='btn mt-3 mx-3' style={{ background: "#63E6BE", color: 'white' }}>Nuevo Cliente</button> :
                                    <button onClick={editar} className='btn mt-3 mx-3' style={{ background: "#63E6BE", color: 'white' }}>Actualizar Cliente</button>}
                                <Link to={'/clientePrincipal'} className="btn mt-3 btn-light" >Cancelar</Link>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
