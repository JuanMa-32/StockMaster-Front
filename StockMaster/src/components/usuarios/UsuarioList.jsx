import React from 'react'
import { UsuarioRow } from './UsuarioRow'

export const UsuarioList = () => {
    return (
        <>
            <table className="table table-hover table-striped " >
                <thead >
                    <tr >
                        <th scope="col" style={{ color: '#939d97', fontFamily: 'serif' }}>Nombre</th>
                        <th scope="col" style={{ color: '#939d97', fontFamily: 'serif' }}>Facturacion</th>
                        <th scope="col" style={{ color: '#939d97', fontFamily: 'serif' }}>Ventas</th>
                        <th scope="col" style={{ color: '#939d97', fontFamily: 'serif' }}>%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <UsuarioRow />
                    </tr>
                </tbody>
            </table>
        </>
    )
}
