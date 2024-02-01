import React, { useContext, useEffect, useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { faArrowDown, faArrowUp, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClienteFindById } from '../../services/ClienteService';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';



export const ClienteForm = () => {
    const { addCliente
    } = useContext(AppContext);

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

        addCliente(cliente);

        Swal.fire
            ('Exito', 'El cliente fue creado con exito', 'success')

        navigate('/clientePrincipal')
    }
    const editar = async (event) => {
        event.preventDefault();

        addCliente(cliente);

        Swal.fire
            ('Exito', 'El cliente fue editado con exito', 'success')

        navigate('/clientePrincipal')
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
    // onChange={(value, country, event) => handleChange1(value, country, event)}
    return (
        <>
            <form>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <div className="circular-icon mb-5 d-flex align-items-center justify-content-center">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="120" height="120" className="rounded-circle me-4" />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input name='nombre' onChange={cambiar} value={cliente.nombre} type="text" style={{ borderRadius: '8px' }}
                                        className="form-control form-control-sm mx-auto" id="exampleFormControlInput1"
                                        placeholder="Nombre" />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input name='apellido' onChange={cambiar} value={cliente.apellido} type="text" style={{ borderRadius: '8px' }}
                                        className="form-control form-control-sm mx-auto" id="exampleFormControlInput1"
                                        placeholder="apellido" />
                                </div>
                                <div className="col-6 d-flex mx-auto">
                                    <textarea name='observaciones' onChange={cambiar} value={cliente.observaciones} className="form-control form-control-sm mx-auto"
                                        style={{ borderRadius: '8px' }}
                                        id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Contacto</h5>
                                <div className="mb-5" >
                                    <div className="col-6 mb-3 d-flex mx-auto">
                                        <input name='email' onChange={cambiar} value={cliente.email} type="email"
                                            style={{ borderRadius: '8px' }}
                                            className="form-control form-control-sm mx-auto" id="exampleFormControlInput1"
                                            placeholder="name@example.com" />
                                    </div>
                                    <div className="col-6 mb-3 d-flex mx-auto ">
                                        <input name='telefono' onChange={cambiar} value={cliente.telefono}
                                            placeholder="Número de teléfono"
                                            className="form-control form-control-sm mx-auto"
                                        />
                                    </div>

                                    <div className="col-6 mb-3 d-flex mx-auto">
                                        <input name='password' onChange={cambiar} value={cliente.password} type="password" style={{ borderRadius: '8px' }}
                                            className="form-control form-control-sm mx-auto" id="exampleFormControlInput1"
                                            placeholder="password" />
                                    </div>
                                </div>
                            </div>

                            <div className='p-4' style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Dirección</h5>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input
                                        name='direccion' onChange={cambiar} value={cliente.direccion}
                                        type="text"
                                        style={{ borderRadius: '8px' }}
                                        className="form-control form-control-sm mx-auto" id="exampleFormControlInput1"
                                        placeholder="Dirección" />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input type="text"
                                        name='complemento' onChange={cambiar} value={cliente.complemento}
                                        style={{ borderRadius: '8px' }}
                                        className="form-control form-control-sm mx-auto" id="exampleFormControlInput1"
                                        placeholder="Complemento" />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
