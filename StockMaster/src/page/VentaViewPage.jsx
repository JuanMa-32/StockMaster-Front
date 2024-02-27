import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { NavBar } from '../components/headers/NavBar'
import { VentaView } from '../components/vender/VentaView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export const VentaViewPage = () => {
  const { id } = useParams()

  return (
    <>
      <div className="d-flex align-items-center">
        <Link to={'/ventas'} className="btn mx-2 " style={{ paddingBottom: '25px' }}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></Link>
        <div className="flex-grow-1">
          <NavBar titulo={`Venta`} />
        </div>
      </div>
      <div className='container'>
        <VentaView id={id} />
      </div>
    </>
  )
}
