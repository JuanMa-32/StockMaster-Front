import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Usuario } from '../components/usuarios/usuario'
import { Sidebar } from '../components/headers/Sidebar'
import { ClientePrincipal } from '../components/Clientes/ClientePrincipal'


export const Rutas = () => {
  return (
    <>
     <div className="d-flex">
   <Sidebar></Sidebar>  
   <div >

   <Routes>
    <Route path="/usuario" element={<Usuario />}></Route>
    <Route path="/clientePrincipal" element={<ClientePrincipal />}></Route>
   </Routes>
   </div>
   </div>
    </>
  )
}
