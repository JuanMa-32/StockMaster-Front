import React from 'react'
import { NavBar } from '../components/headers/NavBar'
import { Productos } from '../components/productos/Productos'


export const ProductoPage = () => {
  return (
    <>
    <NavBar titulo={'Productos'}/>
    <Productos/>
    
    </>
  )
}
