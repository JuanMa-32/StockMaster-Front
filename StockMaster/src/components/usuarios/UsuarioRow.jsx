import React from 'react'

export const UsuarioRow = ({ usuario }) => {
    return (
        <>
            <tr>
                <td>{usuario.nombre} </td>
                <td>$ 100</td>
                <td>{usuario.email}</td>
                <td>%100</td>
            </tr>
        </>
    )
}
