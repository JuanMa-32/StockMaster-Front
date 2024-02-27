import React, { useContext, useState } from 'react'
import { AuthContext } from './../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const usuarioInit = {
    nombre: '',
    password: '',
    email: ''
}

export const LoginPage = () => {

    const [loginForm, setloginForm] = useState({})
    const [showCode, setShowCode] = useState(1);
    const { registroInit, handlerRegistro, handlerLogin, error ,errorMail} = useContext(AuthContext);
    const [registro, setregistro] = useState(registroInit)
    const [usuario, setusuario] = useState(usuarioInit)
    const [errorsRegister, seterrorsRegister] = useState('')
    const onInputChangeRegistro = ({ target }) => {
        const { name, value } = target
        setusuario({
            ...usuario,
            [name]: value
        })

    }

    const onSubmitRegistro = (event) => {
        event.preventDefault()
        if (usuario?.nombre === '' || usuario?.password === '' || usuario?.email === '') {
            seterrorsRegister('Completar los campos obligatorios.')
            return;
        }
        seterrorsRegister('')
        handlerRegistro(registro, usuario)
    }
    const handleKeyDown = (e) => {
        const regex = /^[a-zA-ZÀ-ÿ\s]*$/;
        if (!regex.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
          e.preventDefault();
        }
      }

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setloginForm({
            ...loginForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        handlerLogin(loginForm)
    }
    return (

        <div className="login-page" >
            <div className="form p-5">
                <h3 style={{ color: 'white', textAlign: 'center' }}>Stock Master</h3>
                <div style={{ color: 'white', textAlign: 'center' }} className='mt-3'>
                    <button
                        style={{
                            color: 'white',
                            borderBottom: showCode === 1 ? '2px solid #63E6BE' : 'none',
                        }}
                        className="btn"
                        onClick={() => setShowCode(1)}
                    >
                        Iniciar Sesión
                    </button>
                    <button
                        style={{
                            color: 'white',
                            borderBottom: showCode === 2 ? '2px solid #63E6BE' : 'none',
                        }}
                        className="btn"
                        onClick={() => setShowCode(2)}
                    >
                        Registrarme
                    </button>
                </div>

                {showCode === 1 && (
                    <>
                        <form onSubmit={onSubmit}>
                            <p className='text-danger mx-4'>{error}</p>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                value={loginForm.email}
                                onChange={onInputChange}
                                className="input mt-3 "
                                style={{ borderColor: error ? 'red' : '', borderWidth: '2px' }}
                                placeholder='Correo electrónico'

                            />

                            <input
                                type="password"
                                id="password"
                                name='password'
                                value={loginForm.password}
                                onChange={onInputChange}
                                className="input mt-3 mb-5"
                                style={{ borderColor: error ? 'red' : '', borderWidth: '3px' }}
                                placeholder='Contraseña'
                            />
                            <button type="submit" className="button">
                                Iniciar sesión
                            </button>
                        </form>
                        <div className="mt-5">
                            <a href="https://www.linkedin.com/in/juan-ag%C3%BCero-fullstack/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </a>
                            <a href="https://github.com/JuanMa-32" target="_blank" rel="noopener noreferrer" className='mx-2'>
                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                            </a>
                        </div>
                    </>
                )}
                {showCode === 2 && (
                    <>
                        <form onSubmit={onSubmitRegistro}>
                            <p className='text-danger mx-5'>{errorsRegister} </p>

                            <input
                                type="text"
                                name="nombre"
                                value={usuario?.nombre}
                                onChange={onInputChangeRegistro}
                                onKeyDown={handleKeyDown}
                                className="input  mt-3"
                                placeholder="Nombre del administrador"
                                style={{ borderColor: errorsRegister ? 'red' : '', borderWidth: '2px' }}
                            />
                              <p className='text-danger '>{errorMail}</p>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                value={usuario?.email}
                                onChange={onInputChangeRegistro}
                                className="input "
                                style={{ borderColor: errorsRegister ? 'red' : '', borderWidth: '2px' }}
                                placeholder='Correo Electrónico'
                            />
                            <input
                                type="password"
                                id="password"
                                name='password'
                                value={usuario?.password}
                                onChange={onInputChangeRegistro}
                                style={{ borderColor: errorsRegister ? 'red' : '', borderWidth: '2px' }}
                                className="input mt-3 mb-5"
                                placeholder='Contraseña'
                            />
                            <button type="submit" className="button">
                                Registrarme
                            </button>
                        </form>
                        <div className="mt-5">
                            <a href="https://www.linkedin.com/in/juan-ag%C3%BCero-fullstack/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </a>
                            <a href="https://github.com/JuanMa-32" target="_blank" rel="noopener noreferrer" className='mx-2'>
                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
