import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Usuario } from '../components/usuarios/usuario'
import { Sidebar } from '../components/headers/Sidebar'


export const Rutas = () => {
  return (
    <>
     <div className="d-flex">
   <Sidebar></Sidebar>  
   <Routes>
    <Route path="/usuario" element={<Usuario />}></Route>
   </Routes>
   </div>
    </>
  )
}
