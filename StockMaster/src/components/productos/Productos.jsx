import { faArrowUpFromBracket, faDownload, faFilter, faFolderOpen, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductosList } from './ProductosList';
import { AppContext } from '../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';

export const Productos = () => {
  const { getProductos, productos } = useContext(AppContext)
  const {login} = useContext(AuthContext)
  const [buscar, setbuscar] = useState('')

  useEffect(() => {
    getProductos(login.idNegocio)
  }, [])
 
  const onInputChange = ({ target }) => {
    setbuscar(target.value)
  }
  let filteredProductos=[];
  if(buscar ===''){
    filteredProductos = productos
  }else if(productos.length >0) {
    filteredProductos = productos?.filter(
      (producto) =>
        producto?.nombre.toLowerCase().includes(buscar.toLowerCase())
    );
  }
   
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
        <form className="d-flex" style={{ width: '40%' }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Articulo o código"
            aria-label="Search"
            onChange={onInputChange}
            value={buscar}
          />
          
        </form>

        <div className="d-flex align-items-center">
          <button className='btn me-2'><FontAwesomeIcon icon={faFilter} /> Filtro</button>
          <button className='btn me-2'><FontAwesomeIcon icon={faFolderOpen} /> Categorias</button>
          <button className='btn me-2'><FontAwesomeIcon icon={faArrowUpFromBracket} /> Exportar</button>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <Link to={'/producto/create'} className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
            <FontAwesomeIcon icon={faPlus} /> Producto
          </Link>
        </div>
      </div>
      <ProductosList productos={filteredProductos}/>
    </>
  )
}
