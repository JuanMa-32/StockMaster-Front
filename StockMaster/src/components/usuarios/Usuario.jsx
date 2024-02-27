import React, { useContext } from 'react'
import { UsuarioList } from './UsuarioList'
import { AppContext } from './../../context/AppContext';

export const Usuario = () => {
  const { handlerOpenForm } = useContext(AppContext);
  
  return (
    <>
      <div style={{ background: 'white', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '16px' }}>
        <button
          className="btn"
          onClick={handlerOpenForm}
          style={{ background: '#63E6BE', color: 'white' }}>
          + Usuarios
        </button>
      </div>

      <UsuarioList />

    </>
  )
}
