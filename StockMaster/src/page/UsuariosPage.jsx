import React from 'react'
import { NavBar } from '../components/headers/NavBar'
import { Usuario } from '../components/usuarios/usuario'

export const UsuariosPage = () => {
  return (
    <>
    <NavBar titulo={'Usuarios'}/>
    <Usuario/>
    </>
  )
}
