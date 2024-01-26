import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UsuarioRow = ({ usuario }) => {
    const navigate=useNavigate()
    const usuarioFindId=(idUsuario) => {
        navigate(`/usuario/${idUsuario}`)
    }
    return (
        <>
            <tr onClick={() =>usuarioFindId(usuario.id) }>
                <td >{usuario.nombre} </td>
                <td>$ {usuario.facturacion}</td>
                <td>{usuario.ventas}</td>
                <td>%</td>
            </tr>
        </>
    )
}
