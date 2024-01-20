import React from 'react'
import { NavBar } from '../components/headers/NavBar'
import { ClienteForm } from '../components/Clientes/ClienteForm'

const ClientFormPage = () => {
  return (
    <div>
      <NavBar titulo={'Registrar Cliente'}></NavBar>
      <ClienteForm></ClienteForm>
    </div>
  )
}

export default ClientFormPage
