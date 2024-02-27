import React, { useContext } from 'react'
import { NavBar } from './../components/headers/NavBar';
import { ProductoForm } from '../components/productos/ProductoForm';
import { AppContext } from '../context/AppContext';
import { CategoriaModal } from '../components/productos/CategoriaModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ProductoFormPage = () => {
  const {visibleCategoria} = useContext(AppContext)
  return (
   <>
   {!visibleCategoria||<CategoriaModal/>}
   <div className="d-flex align-items-center">
        <Link to={'/productos'} className="btn mx-2 " style={{ paddingBottom: '25px' }}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></Link>
        <div className="flex-grow-1">
        <NavBar titulo={'Registre sus productos'}/>
        </div>
      </div>
   
   <ProductoForm/>
   </>
  )
}
