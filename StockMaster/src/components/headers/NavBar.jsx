import React from 'react'

export const NavBar = ({ titulo }) => {
    return (
        <>
            <header className="py-3 mb-3 border-bottom ">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <h2>{titulo}</h2>

                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 dropdown">
                            <button className="btn d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                                <span>Juan Manuel</span>
                            </button>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="userDropdown" style={{ background: 'black', right: 0, left: 'auto' }}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Subscripcion</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Cambiar Contraseña</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Perfil</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>Salir</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
