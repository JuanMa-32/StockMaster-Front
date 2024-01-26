import React from 'react'
import { NavBar } from './../components/headers/NavBar';
import { Transacciones } from '../components/transacciones/Transacciones';
import { TransaccionList } from '../components/transacciones/TransaccionList';

export const TransaccionPage = () => {
  return (
    <>
    <NavBar titulo={'Historial de ventas'}/>
    <Transacciones/>
    
    </>
  )
}
