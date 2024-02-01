import React from 'react'
import { NavBar } from './../components/headers/NavBar';
import { VentaFinal } from '../components/vender/VentaFinal';

export const VentaFinalPage = () => {
  return (
    <>
    <NavBar titulo={'Vender'} ></NavBar>
    <VentaFinal></VentaFinal>
    </>
  )
}
