import React from 'react'
import { NavBar } from '../components/headers/NavBar'
import { Productos } from '../components/productos/Productos'
import { ProductosList } from '../components/productos/ProductosList'

export const ProductoPage = () => {
  return (
    <>
    <NavBar titulo={'Productos'}/>
    <Productos/>
    <ProductosList></ProductosList>
    </>
  )
}
