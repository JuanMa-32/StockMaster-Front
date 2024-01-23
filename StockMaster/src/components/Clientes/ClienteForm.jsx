import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { faArrowDown, faArrowUp, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ClienteForm = () => {

    const [phoneNumber1, setPhoneNumber1] = useState('');

    const [phoneNumber2, setPhoneNumber2] = useState('');

    const handleChange1 = (value, country, event) => {
        const countryCode = event.target.getAttribute('data-country-code');
        setPhoneNumber1(`+${countryCode} ${value}`);
    };

    const handleChange2 = (value, country, event) => {
        const countryCode = event.target.getAttribute('data-country-code');
        setPhoneNumber2(`+${countryCode} ${value}`);
    };
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
                                    <input type="text" style={{borderRadius: '8px'}} 
                                    className="form-control form-control-sm mx-auto" id="exampleFormControlInput1" 
                                    placeholder="Nombre" />
                                </div>
                                <div className="col-6 d-flex mx-auto">
                                    <textarea className="form-control form-control-sm mx-auto" 
                                    style={{borderRadius: '8px'}}
                                    id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Contacto</h5>
                                <div className="mb-5" >
                                    <div className="col-6 mb-3 d-flex mx-auto">
                                        <input type="email" 
                                        style={{borderRadius: '8px'}}
                                        className="form-control form-control-sm mx-auto" id="exampleFormControlInput1" 
                                        placeholder="name@example.com" />
                                    </div>
                                    <div className="col-6 mb-3 d-flex mx-auto ">
                                        <PhoneInput

                                            placeholder="Número de teléfono"
                                            inputStyle={{ width: '250px', height: '30px', marginLeft: '45px',borderRadius: '8px' }}
                                            containerStyle={{ display: 'inline-block' }}
                                            buttonStyle={{ borderLeft: '1px solid #ced4da', padding: '10px' }}
                                            value={phoneNumber1}
                                            onChange={(value, country, event) => handleChange1(value, country, event)}
                                        />
                                    </div>

                                    <div className="col-6 mb-3 d-flex mx-auto">
                                        <PhoneInput

                                            placeholder="Número de teléfono"
                                            inputStyle={{ width: '250px', height: '30px', marginLeft: '45px',borderRadius: '8px' }}
                                            containerStyle={{ display: 'inline-block' }}
                                            buttonStyle={{ borderLeft: '1px solid #ced4da', padding: '10px' }}
                                            value={phoneNumber2}
                                            onChange={(value, country, event) => handleChange2(value, country, event)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='p-4' style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h5>Dirección</h5>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input type="text"
                                    style={{borderRadius: '8px'}}
                                    className="form-control form-control-sm mx-auto" id="exampleFormControlInput1" 
                                     placeholder="Dirección" />
                                </div>
                                <div className="col-6 mb-3 d-flex mx-auto">
                                    <input type="text"
                                    style={{borderRadius: '8px'}}
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
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
