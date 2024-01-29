import React from 'react'
import { NavBar } from './../components/headers/NavBar';
import { Vender } from '../components/vender/vender';

export const VentaPage = () => {
  return (
    <>
    <NavBar titulo={'Vender'}/>
    <Vender/>
    </>
  )
}
