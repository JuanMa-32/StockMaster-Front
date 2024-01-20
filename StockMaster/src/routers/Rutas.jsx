import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { UsuariosPage } from '../page/UsuariosPage'

import { AppProvider } from './../context/AppProvider';

import { ClientePage } from '../page/ClientePage'
import { ClienteForm } from '../components/Clientes/ClienteForm'
import ClientFormPage from '../page/ClientFormPage';
import { Sidebar } from './../components/headers/SideBar';




export const Rutas = () => {
  return (
    <>

      <AppProvider>
        <div className="d-flex">
          <Sidebar/>
          <div className='content-container'>
            <Routes>
              <Route path="/usuarios" element={<UsuariosPage />}></Route>
            <Route path="/clientePrincipal" element={<ClientePage />}></Route>
            <Route path="/clienteFormulario" element={<ClientFormPage />}></Route>
            <Route path="/clienteFormulario/:id" element={<ClienteForm />}></Route>
          </Routes>
          </div>
        </div>
        
      </AppProvider>
    </>
  )
}
