import React from 'react'
import { NavBar } from './../components/headers/NavBar';
import { ProductoForm } from '../components/productos/ProductoForm';

export const ProductoFormPage = () => {
  return (
   <>
   <NavBar titulo={'Registre sus productos'}/>
   <ProductoForm/>
   </>
  )
}
