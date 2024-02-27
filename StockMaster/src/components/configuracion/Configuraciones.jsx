import React, { useContext, useEffect, useState } from 'react'
import { NavBar } from './../headers/NavBar';
import { Link } from 'react-router-dom';
import { AppContext } from './../../context/AppContext';
import { AuthContext } from '../../auth/context/AuthContext';

export const Configuraciones = () => {
    const { saveConfiguraciones,negocioSelected,negocio } = useContext(AppContext);
    const{login} = useContext(AuthContext)
    const [comercio, setcomercio] = useState({})
    

    useEffect(() => {
        negocioSelected(login.idNegocio)
        setcomercio(negocio)
    }, [])
    


    const onInputChange = ({ target }) => {
        const { name, value } = target
        setcomercio({
            ...comercio,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        saveConfiguraciones(comercio)
    }

    return (
        <>
            <NavBar titulo={'Configuraciones'}></NavBar>
            <form onSubmit={onSubmit}>
                <div className="row mx-auto mt-3 ">
                    <div className="col-md-6">
                        <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                            <h5 className="mx-5">Identificación </h5>
                            <div className="col-7 mb-3 d-flex mx-auto">
                                <input name='nombreComercio' type="text"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Nombre del comercio"
                                    value={comercio?.nombreComercio}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="col-7 mb-3 d-flex mx-auto">
                                <input name='nombreResponsable' type="text"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Nombre del responsáble o de la Empresa"
                                    value={comercio?.nombreResponsable}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="col-7  d-flex mx-auto">
                                <input name='cedulaIdentidad' type="text"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Cedula de identidad o de persona jurídica"
                                    value={comercio?.cedulaIdentidad}
                                    onChange={onInputChange}
                                />
                            </div>


                            <div className="col-6 d-flex mx-auto">
                                <div
                                    className="form-control mt-3"
                                    style={{
                                        borderRadius: '8px',
                                        overflowY: 'auto',
                                        backgroundColor: '#f0fdf4',
                                        fontSize: '11px'
                                    }}
                                >
                                    Informar una identificación legal es una medida para validar su cuenta, preservar su privacidad y garantizar la calidad de todos los catálogos de Stock Master. Los datos de identificación no se mostrarán en su catálogo en línea.
                                </div>
                            </div>


                        </div>
                        <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                            <h5 className="mx-5">Datos de contacto </h5>

                            <div className="col-7 mb-3 d-flex mx-auto">
                                <input name='celular' type="number"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Celular"
                                    value={comercio?.celular}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="col-7 mb-3 d-flex mx-auto">
                                <input name='email' type="email"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Email"
                                    value={comercio?.email}
                                    onChange={onInputChange}

                                />
                            </div>
                        </div>
                        <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                            <h5 className="mx-5">Dirección </h5>
                            <div className="col-7 mb-3 d-flex mx-auto">
                                <input name='direccion' type="text"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Dirección"
                                    value={comercio?.direccion}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="col-7 mb-3 d-flex mx-auto">
                                <input name='complemento' type="text"
                                    style={{ borderRadius: '8px', fontSize: '15px' }}
                                    className="form-control form-control-lg mx-auto" id="exampleFormControlInput1"
                                    placeholder="Complemento"
                                    value={comercio?.complemento}
                                    onChange={onInputChange}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='mb-3 p-4' style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px', position: 'relative' }}>
                            <h5 className="mx-5">Sobre el negocio </h5>
                            <div className="col-9 mb-4 mt-4 d-flex mx-auto">
                                <textarea className="form-control  mx-auto"
                                    style={{ borderRadius: '8px' }}
                                    placeholder="informaciones extras"
                                    id="exampleFormControlTextarea1" rows="3"
                                    name="informacion"
                                    value={comercio?.informacion}
                                    onChange={onInputChange}
                                />
                            </div>

                            <button className="btn mt-3" style={{ background: '#63E6BE', color: 'white' }}
                                type="submit">Guardar cambios</button>
                            <Link to={'/vender'} className="btn mt-3" >Cancelar</Link>

                        </div>

                    </div>

                </div>

            </form>
        </>
    )
}
