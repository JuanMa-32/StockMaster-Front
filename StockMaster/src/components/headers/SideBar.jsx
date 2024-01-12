import { faBorderAll, faCartShopping, faChartSimple, faCircleCheck, faDollarSign, faGear, faMoneyCheckDollar, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'




export const Sidebar = () => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px', height: '100vh' }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-4">Cafeteria</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#speedometer2" /></svg>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '8px' }} />
                            Vender
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#speedometer2" /></svg>
                           
                            Pedidos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#table" /></svg>
                            <FontAwesomeIcon icon={faBorderAll} style={{ marginRight: '8px' }} />
                            Productos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#grid" /></svg>
                            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '8px' }}/>
                            Catálogo Online
                        </a>
                    </li>
                    <li>
                        <NavLink to={"clientePrincipal"} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }}/>
                            Clientes
                        </NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faDollarSign}style={{ marginRight: '8px' }} />
                            Transacciones
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ marginRight: '8px' }}/>
                            Finanzas
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faChartSimple} style={{ marginRight: '8px' }}/>
                            Estadisticas
                        </a>
                    </li>
                    <li>
                        <Link to={'/usuarios'} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faUserGroup} style={{ marginRight: '8px' }}/>
                            Usuarios
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faGear} style={{ marginRight: '8px' }}/>
                            Configuraciones
                        </a>
                    </li>
                </ul>
            </div>
        </>

    )
}
