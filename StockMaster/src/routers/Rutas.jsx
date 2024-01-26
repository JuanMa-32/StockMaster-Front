import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { UsuariosPage } from '../page/UsuariosPage'

import { AppProvider } from './../context/AppProvider';

import { ClientePage } from '../page/ClientePage'
import { ClienteForm } from '../components/Clientes/ClienteForm'
import ClientFormPage from '../page/ClientFormPage';
import { Sidebar } from './../components/headers/SideBar';
import { ProductoPage } from '../page/ProductoPage';
import { ProductoFormPage } from '../page/ProductoFormPage';
import { TransaccionPage } from '../page/TransaccionPage';




export const Rutas = () => {
  return (
    <>

      <AppProvider>
        <div className="d-flex">
          <Sidebar />
          <div className='content-container'>
            <Routes>
              <Route path="/usuarios" element={<UsuariosPage />}></Route>
              <Route path="/clientePrincipal" element={<ClientePage />}></Route>
              <Route path="/clienteFormulario" element={<ClientFormPage />}></Route>
              <Route path="/clienteFormulario/:id" element={<ClienteForm />}></Route>
              <Route path="/productos" element={<ProductoPage></ProductoPage>}></Route>
              <Route path="/producto/create" element={<ProductoFormPage></ProductoFormPage>}> </Route>
              <Route path="/ventas" element={<TransaccionPage/>}> </Route>
            </Routes>
          </div>
        </div>

      </AppProvider>
    </>
  )
}
