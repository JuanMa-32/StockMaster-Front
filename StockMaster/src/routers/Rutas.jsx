import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/headers/Sidebar'
import { ClientePrincipal } from '../components/Clientes/ClientePrincipal'
import { UsuariosPage } from '../page/UsuariosPage'
import { AppProvider } from './../context/AppProvider';



export const Rutas = () => {
  return (
    <>
      <AppProvider>
        <div className="d-flex">
          <Sidebar></Sidebar>
          <div className='content-container'>
            <Routes>
              <Route path="/usuarios" element={<UsuariosPage />}></Route>
              <Route path="/clientePrincipal" element={<ClientePrincipal />}></Route>
            </Routes>
          </div>
        </div>
      </AppProvider>
    </>
  )
}
