import React from 'react'
import { NavBar } from './../components/headers/NavBar';
import { Vender } from '../components/vender/vender';

export const VentaPage = () => {
  return (
    <div style={{overflow:'hidden'}}>
    <NavBar titulo={'Vender'}/>
    <Vender/>
    </div>
  )
}
