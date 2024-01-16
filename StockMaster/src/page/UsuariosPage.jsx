import React, { useContext } from 'react'
import { NavBar } from '../components/headers/NavBar'
import { Usuario } from '../components/usuarios/usuario'
import { AppContext } from './../context/AppContext';
import { ModalForm } from '../components/usuarios/ModalForm';

export const UsuariosPage = () => {
  const {visibleForm} = useContext(AppContext);

  return (
    <>
    {!visibleForm || <ModalForm/>}
    <NavBar titulo={'Usuarios'}/>
    <Usuario/>
    </>
  )
}
