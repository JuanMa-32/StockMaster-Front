import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/headers/Sidebar'

import { UsuariosPage } from '../page/UsuariosPage'
import { ClientePage } from '../page/ClientePage'



export const Rutas = () => {
  return (
    <>

      <div className="d-flex">
        <Sidebar></Sidebar>
        <div className='content-container'>

          <Routes>
            <Route path="/usuarios" element={<UsuariosPage />}></Route>
            <Route path="/clientePrincipal" element={<ClientePage />}></Route>
          </Routes>
        </div>
      </div>




    </>
  )
}
