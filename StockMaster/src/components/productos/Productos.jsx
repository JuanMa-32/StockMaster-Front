import { faArrowUpFromBracket, faDownload, faFilter, faFolderOpen, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Productos = () => {
  return (
   <>
      <div className="d-flex align-items-center justify-content-between mb-3" style={{ background: 'white', width: '100%', padding: '10px',borderRadius:'10px' }}>
  <form className="d-flex" style={{width:'40%'}}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Articulo o código"
      aria-label="Search"
    />
    <button className="btn" type="submit" style={{ background: '#63E6BE', color: 'white' }}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
    <button className='btn'><FontAwesomeIcon icon={faFilter} /> Filtro</button>
    <button className='btn'><FontAwesomeIcon icon={faFolderOpen} /> Categorias</button>
    <button className='btn'><FontAwesomeIcon icon={faArrowUpFromBracket} /> Exportar</button>

  <div className="d-flex align-items-center">
    <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
      <FontAwesomeIcon icon={faDownload} />
    </button>
    <button className="btn m-1" style={{ background: '#63E6BE', color: 'white' }}>
      <FontAwesomeIcon  icon={faPlus} /> Producto
    </button>
  </div>
</div>
   </>
  )
}
