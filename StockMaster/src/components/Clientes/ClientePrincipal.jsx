import { faArrowDown, faDownload, faMagnifyingGlass, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClienteLista } from "./ClienteLista"
import { useNavigate } from "react-router-dom"

export const ClientePrincipal = () => {
  const navegar = useNavigate()
  const verCliente = () => {
    navegar('/clienteFormulario')

  }
  return (
    <>
   <div className="d-flex align-items-center justify-content-between" style={{ background: 'white', width: '100%', padding: '10px',borderRadius:'10px' }}>
  <form className="d-flex" style={{width:'40%'}}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Buscar por nombre"
      aria-label="Search"
    />
    <button className="btn" type="submit" style={{ background: '#63E6BE', color: 'white' }}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
  <div className="d-flex align-items-center">
    <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
      <FontAwesomeIcon icon={faDownload} />
    </button>
    <button onClick={verCliente} className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
      <FontAwesomeIcon onClick={verCliente} icon={faPlus} /> Cliente
    </button>
  </div>
</div>
<ClienteLista />

    </>
  )
}