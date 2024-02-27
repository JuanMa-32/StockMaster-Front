import React from 'react'
import { NavBar } from '../components/headers/NavBar'
import { ClienteForm } from '../components/Clientes/ClienteForm'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ClientFormPage = () => {

  return (
    <div>
       <div className="d-flex align-items-center">
        <Link to={'/clientePrincipal'} className="btn mx-2" style={{paddingBottom:'25px'}}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></Link>
        <div className="flex-grow-1">
          <NavBar titulo={`clientes`} />
        </div>
      </div>
     
      <ClienteForm></ClienteForm>
    </div>
  )
}

export default ClientFormPage
