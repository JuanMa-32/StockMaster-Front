import { faArrowDown, faMagnifyingGlass, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ClientePrincipal = ()=>{
    return (<>
 
 <div className="d-flex align-items-center">
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar por nombre" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  </nav>
  <div className="float-right"style={{marginLeft:700}}>
    <button className="btn btn-outline-success btn-lg m-2" type="submit"><FontAwesomeIcon icon={faArrowDown} /></button>
    <button className="btn btn-outline-success btn-lg m-2" type="submit"><FontAwesomeIcon icon={faPlus} /> Nuevo Cliente</button>
  </div>
</div>




    </>
    )
}