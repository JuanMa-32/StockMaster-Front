import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


import { UsuariosPage } from '../page/UsuariosPage'

import { AppProvider } from './../context/AppProvider';

import { ClientePage } from '../page/ClientePage'
import ClientFormPage from '../page/ClientFormPage';
import { Sidebar } from './../components/headers/SideBar';
import { ProductoPage } from '../page/ProductoPage';
import { ProductoFormPage } from '../page/ProductoFormPage';
import { TransaccionPage } from '../page/TransaccionPage';
import { VentaPage } from '../page/VentaPage';
import { VentaFinalPage } from '../page/VentaFinalPage';
import { RegistroPage } from './../auth/pages/RegistroPage';
import { ProductoEdit } from '../page/ProductoEdit';
import { VentaViewPage } from '../page/VentaViewPage';
import { UsuarioViewPage } from '../page/UsuarioViewPage';
import { Configuraciones } from './../components/configuracion/Configuraciones';
import { EstadisticasPage } from '../page/EstadisticasPage';

export const Rutas = () => {
  return (
    <>

      <AppProvider>
        <div className="d-flex">
          <Sidebar />
          <div className='content-container'>
            <Routes>
              <Route path="/vender" element={<VentaPage />}/>
              <Route path="/" element={<Navigate to="/vender" />} />
              <Route path="/usuarios" element={<UsuariosPage />}></Route>
              <Route path="/usuario/:id" element={<UsuarioViewPage />}></Route>
              <Route path="/clientePrincipal" element={<ClientePage />}></Route>
              <Route path="/clienteFormulario" element={<ClientFormPage />}></Route>
              <Route path="/clienteFormulario/:id" element={<ClientFormPage />}></Route>
              <Route path="/productos" element={<ProductoPage></ProductoPage>}></Route>
              <Route path="/producto/:id" element={<ProductoEdit></ProductoEdit>}></Route>
              <Route path="/producto/create" element={<ProductoFormPage></ProductoFormPage>}> </Route>
              <Route path="/ventas" element={<TransaccionPage />}> </Route>
              <Route path="/venta/:id" element={<VentaViewPage />}> </Route>
              <Route path="/checkout/finish" element={<VentaFinalPage />}> </Route>
              <Route path='/registrarme' element={<RegistroPage></RegistroPage>} ></Route>
              <Route path='/config/general' element={<Configuraciones></Configuraciones>} ></Route> 
              <Route path='/estadisticas' element={<EstadisticasPage></EstadisticasPage>} ></Route>         
            </Routes>
          </div>
        </div>

      </AppProvider>
    </>
  )
}
