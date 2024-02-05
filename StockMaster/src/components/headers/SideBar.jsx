import { faBars, faBorderAll, faCartShopping, faChartSimple, faCircleCheck, faDollarSign, faGear, faMoneyCheckDollar, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'




export const Sidebar = () => {
    return (
        <>
        
            <div className="d-flex flex-column flex-shrink-0 p-3 sidebar " >

                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-4">Cafeteria</span>
                </a>

                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to={`/vender`} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#speedometer2" /></svg>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '8px' }} />
                            Vender
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#speedometer2" /></svg>
                            <FontAwesomeIcon icon={faBars} style={{ marginRight: '8px' }} />
                            Pedidos
                        </a>
                    </li>
                    <li>
                        <Link to={`/productos`} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#table" /></svg>
                            <FontAwesomeIcon icon={faBorderAll} style={{ marginRight: '8px' }} />
                            Productos
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#grid" /></svg>
                            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '8px' }} />
                            Catálogo Online
                        </a>
                    </li>
                    <li>
                        <Link to={"clientePrincipal"} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                            Clientes
                        </Link>
                    </li>
                    <li>
                        <Link to={`/ventas`} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '8px' }} />
                            Transacciones
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ marginRight: '8px' }} />
                            Finanzas
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faChartSimple} style={{ marginRight: '8px' }} />
                            Estadisticas
                        </a>
                    </li>
                    <li>
                        <Link to={'/usuarios'} className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faUserGroup} style={{ marginRight: '8px' }} />
                            Usuarios
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="45"><use xlinkHref="#people-circle" /></svg>
                            <FontAwesomeIcon icon={faGear} style={{ marginRight: '8px' }} />
                            Configuraciones
                        </a>
                    </li>
                </ul>
            </div>
        </>

    )
}
