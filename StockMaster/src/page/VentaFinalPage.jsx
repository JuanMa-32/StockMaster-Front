import React from 'react'
import { NavBar } from './../components/headers/NavBar';
import { VentaFinal } from '../components/vender/VentaFinal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const VentaFinalPage = () => {
  return (
    <>
    <div className="d-flex align-items-center">
        <Link to={'/vender'} className="btn mx-2" style={{paddingBottom:'25px'}}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></Link>
        <div className="flex-grow-1">
          <NavBar titulo={`Vender`} />
        </div>
      </div>
    <div className='container'>
    <VentaFinal></VentaFinal>
    </div>
    </>
  )
}
