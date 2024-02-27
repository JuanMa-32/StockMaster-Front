import { faFilter, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { TransaccionList } from './TransaccionList'
import { AppContext } from '../../context/AppContext'
import { AuthContext } from '../../auth/context/AuthContext'

export const Transacciones = () => {
  const [buscar, setbuscar] = useState('')
  const { getTransacciones, transacciones } = useContext(AppContext)
  const {login} = useContext(AuthContext);
  useEffect(() => {
    getTransacciones(login.idNegocio)
    
  }, [])

  const onInputChange = ({ target }) => {
    setbuscar(target.value)
  }
  let filteredTransacciones=[];
  if(buscar === ''){
    filteredTransacciones=transacciones;
  }else if(transacciones.length >0){
    filteredTransacciones = transacciones.filter(
      (transaccion) =>
      transaccion?.cliente.nombre.toLowerCase().includes(buscar.toLowerCase())
    );
  }


  return (
    <>
      <div className="d-flex align-items-center justify-content-between" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
        <form className="d-flex" style={{ width: '50%' }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Nombre del cliente "
            aria-label="Search"
            onChange={onInputChange}
            value={buscar}
          />

        </form>
        <div className="d-flex">
          <button className='btn me-2'><FontAwesomeIcon icon={faFilter} /> Filtro</button>
          {/* <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="catalogDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faUserGroup} /> Catalogo
            </button>
            <ul className="dropdown-menu" aria-labelledby="catalogDropdown">

              <li><a className="dropdown-item" href="#">Opción 1</a></li>
              <li><a className="dropdown-item" href="#">Opción 2</a></li>

            </ul>
          </div> */}
        </div>
      </div>
      <TransaccionList ventas={filteredTransacciones} />
    </>

  )
}
