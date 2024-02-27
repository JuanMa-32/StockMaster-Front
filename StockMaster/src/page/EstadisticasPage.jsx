import React from 'react'
import { PieChartUsuarios } from '../components/estadisticas/PieChartUsuarios'
import { NavBar } from '../components/headers/NavBar'
import { SideBarEstadisticas } from '../components/headers/SideBarEstadisticas'

export const EstadisticasPage = () => {
  return (
    <>
    <NavBar titulo={'Estadísticas'}/>
    <div style={{backgroundColor:'white'}} className='d-flex '>
      <SideBarEstadisticas/>
    <PieChartUsuarios></PieChartUsuarios>
    </div>
    </>
  )
}
