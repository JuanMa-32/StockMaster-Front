import React from 'react'

export const SideBarEstadisticas = () => {
  return (
    <div className="sidebar-stats">
      <ul>
        <li className="sidebar-btn">
          <a href="#">
            <div className="section-header">
              <div className="section-title">GANANCIA</div>
            </div>
            <div className="section-content">
              <p>ggg</p>
              <p>ggg</p>
            </div>
          </a>
        </li>
        <div className="section-divider" />

        <li className="sidebar-btn">
          <a href="#">
            <div className="section-header">
              <div className="section-title">TASA DE VENTA</div>

            </div>
            <div className="section-content">
              <p>Hoy:</p>
              <p>Mejor hora: </p>
            </div>
          </a>
        </li>
        <div className="section-divider" />
        <li className="sidebar-btn">
          <a href="#">
            <div className="section-header">
              <div className="section-title">MEDIO DE PAGO</div>

            </div>
            <div className="section-content">
              <p>ggg</p>
            </div>
          </a>
        </li>
        <div className="section-divider" />
        <li className="sidebar-btn">
          <a href="#">
            <div className="section-header">
              <div className="section-title">PRODUCTOS MÁS VENDIDOS POR VALOR</div>

            </div>
            <div className="section-content">
              <p>#1</p>
              <p>ggg</p>
            </div>
          </a>
        </li>
        <div className="section-divider" />
        <li className="sidebar-btn">
          <a href="#">
            <div className="section-header">
              <div className="section-title">MEJORES CLIENTES POR VALOR</div>

            </div>
            <div className="section-content">
              <p>#1</p>
              <p>ggg</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
