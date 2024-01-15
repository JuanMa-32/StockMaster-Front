import React from 'react'

export const NavBar = ({ titulo }) => {
    return (
        <>
            <header className="py-3 mb-3 border-bottom">

                <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <h3>{titulo}</h3>

                    <div className="d-flex align-items-center">
                    <form className="w-100 me-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="flex-shrink-0 dropdown">
                            <button className="btn d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                                <span>Juan Manuel</span>
                            </button>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="userDropdown" style={{background:'black'}}>
                                <li><a className="dropdown-item" href="#" style={{color: 'white'}}>Subscripcion</a></li>
                                <li><a className="dropdown-item" href="#" style={{color: 'white'}}>Cambiar Contraseña</a></li>
                                <li><a className="dropdown-item" href="#" style={{color: 'white'}}>Perfil</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" style={{color: 'red'}}>Salir</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </header>

        </>
    )
}
