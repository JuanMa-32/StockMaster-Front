import React, { useContext } from 'react'
import { AuthContext } from './../../auth/context/AuthContext';
import { AppContext } from './../../context/AppContext';
import { ModalPassword } from './ModalPassword';

export const NavBar = ({ titulo }) => {
    const { handlerLogout, login } = useContext(AuthContext)
    const {handlerOpenFormPassword,visibleModalPassword} = useContext(AppContext)

    return (
        <>
       {!visibleModalPassword ||  <ModalPassword/>}
            <header className="py-3 mb-3 border-bottom">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <h2>{titulo}</h2>
                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <button className="btn d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/card.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                                <span>{login.user.nombre}</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="userDropdown" style={{ backgroundColor: '#d7d9db', right: 0, left: 'auto' }}>
                                <li><button onClick={handlerOpenFormPassword} className="dropdown-item" >Cambiar Contraseña</button></li>
                                <li><button className="dropdown-item" href="#" style={{ color: 'red' }} onClick={handlerLogout}>Salir</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
