import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/headers/Sidebar'
import { UsuariosPage } from '../page/UsuariosPage'



export const Rutas = () => {
  return (
    <>
    
      <div className="d-flex" >
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/usuario" element={<UsuariosPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}
