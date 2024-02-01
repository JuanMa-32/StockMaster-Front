import React, { useContext } from 'react'
import { NavBar } from './../components/headers/NavBar';
import { ProductoForm } from '../components/productos/ProductoForm';
import { AppContext } from '../context/AppContext';
import { CategoriaModal } from '../components/productos/CategoriaModal';

export const ProductoFormPage = () => {
  const {
    visibleCategoria} = useContext(AppContext)
  return (
   <>
   {!visibleCategoria||<CategoriaModal/>}
   <NavBar titulo={'Registre sus productos'}/>
   <ProductoForm/>
   </>
  )
}
