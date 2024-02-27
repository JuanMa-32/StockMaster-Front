import { faArrowDown, faDownload, faMagnifyingGlass, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClienteLista } from "./ClienteLista"

import { useContext, useEffect, useState } from "react"

import { AppContext } from "../../context/AppContext"
import { Link } from "react-router-dom"
import { AuthContext } from './../../auth/context/AuthContext';

export const ClientePrincipal = () => {
  const { todosClientes, clientes } = useContext(AppContext)
  const { login } = useContext(AuthContext);
  const [buscar, setbuscar] = useState('')

  useEffect(() => {
    todosClientes(login.idNegocio)
  }, [])

  const onInputChange = ({ target }) => {
    setbuscar(target.value)
  }

  let filteredClientes;
  if (buscar === '') {
    filteredClientes = clientes
  } else if(clientes.length >0) {
    filteredClientes = clientes?.filter(
      (cliente) =>
        cliente?.nombre.toLowerCase().includes(buscar.toLowerCase())
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
        <form className="d-flex" style={{ width: '40%' }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar por nombre"
            aria-label="Search"
            onChange={onInputChange}
            value={buscar}
          />
         
        </form>
        <div className="d-flex align-items-center">
          <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <Link to={'/clienteFormulario'} className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faPlus} /> Cliente
          </Link>
        </div>
      </div>
      <ClienteLista clientes={filteredClientes} />

    </>
  )
}