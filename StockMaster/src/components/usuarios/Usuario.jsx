import React from 'react'
import { UsuarioList } from './UsuarioList'

export const Usuario = () => {
  return (
    <>
      <div style={{ background: 'white', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '16px' }}>
        <button type="button" className="btn" style={{ background: '#5ccc81', color: 'white' }}>+ Usuarios</button>
      </div>

      <UsuarioList />

    </>
  )
}
