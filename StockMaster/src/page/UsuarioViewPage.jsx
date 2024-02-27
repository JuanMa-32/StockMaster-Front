import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NavBar } from '../components/headers/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { UsuarioView } from '../components/usuarios/UsuarioView';
import { AppContext } from '../context/AppContext';

export const UsuarioViewPage = () => {
  const { id } = useParams();
const {usuarioSelected} = useContext(AppContext)
  return (
    <>
      <div className="d-flex align-items-center">
        <Link to={'/usuarios'} className="btn mx-2 " style={{ paddingBottom: '25px' }}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></Link>
        <div className="flex-grow-1">
          <NavBar titulo={`${usuarioSelected.nombre}`} />
        </div>
      </div>
      <div className='container'>
      <UsuarioView id={id} />
      </div>
    </>
  )
}
