import React, { useContext, useEffect } from 'react'
import { Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { ProductoForm } from '../components/productos/ProductoForm';
import { AppContext } from '../context/AppContext';
import { NavBar } from '../components/headers/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const ProductoEdit = () => {
  const { id } = useParams();
  const { productoSelected,handlerProductoSelected } = useContext(AppContext)

  useEffect(() => {
    handlerProductoSelected(id)
  }, [id])

  return (
    <>
      <div className="d-flex align-items-center">
        <Link to={'/productos'} className="btn mx-2" style={{ paddingBottom: '25px' }}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></Link>
        <div className="flex-grow-1">
          <NavBar titulo={`${productoSelected.nombre}`} />
        </div>
      </div>
      <ProductoForm id={id} />
    </>

  )
}
