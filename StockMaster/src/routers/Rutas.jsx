import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/headers/Sidebar'

import { UsuariosPage } from '../page/UsuariosPage'
import { ClientePage } from '../page/ClientePage'
import { ClienteForm } from '../components/Clientes/ClienteForm'



export const Rutas = () => {
  return (
    <>

      <div className="d-flex">
        <Sidebar></Sidebar>
        <div className='content-container'>

          <Routes>
            <Route path="/usuarios" element={<UsuariosPage />}></Route>
            <Route path="/clientePrincipal" element={<ClientePage />}></Route>
            <Route path="/clienteFormulario" element={<ClienteForm />}></Route>
            <Route path="/clienteFormulario/:id" element={<ClienteForm />}></Route>
          </Routes>
        </div>
      </div>




    </>
  )
}
