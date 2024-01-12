import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/headers/Sidebar'
import { ClientePrincipal } from '../components/Clientes/ClientePrincipal'
import { UsuariosPage } from '../page/UsuariosPage'



export const Rutas = () => {
  return (
    <>

     <div className="d-flex">
   <Sidebar></Sidebar>  
   <div >

   <Routes>
    <Route path="/usuario" element={<UsuariosPage />}></Route>
    <Route path="/clientePrincipal" element={<ClientePrincipal />}></Route>
   </Routes>
   </div>
   </div>

    
     

    </>
  )
}
