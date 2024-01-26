import { faArrowDown, faDownload, faMagnifyingGlass, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClienteLista } from "./ClienteLista"

import { useContext, useEffect, useState } from "react"

import { AppContext } from "../../context/AppContext"

export const ClientePrincipal = () => {
  const { todosClientes, clientes } = useContext(AppContext)
  const [buscar, setbuscar] = useState('')

  useEffect(() => {
    todosClientes()
  }, [])
  
  const onInputChange = ({ target }) => {
    setbuscar(target.value)
  }

  const filteredClientes = clientes.filter(
    (cliente) =>
    cliente?.nombre.toLowerCase().includes(buscar.toLowerCase())
  );
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
          <button className="btn" type="submit" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="d-flex align-items-center">
          <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faPlus} /> Cliente
          </button>
        </div>
      </div>
      <ClienteLista clientes={filteredClientes}/>

    </>
  )
}