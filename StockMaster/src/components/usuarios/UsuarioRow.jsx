import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UsuarioRow = ({ usuario, totalVentas}) => {
    const navigate=useNavigate()
    const usuarioFindId=(idUsuario) => {
        navigate(`/usuario/${idUsuario}`)
    }
    const porcentajeVentas = (usuario.ventas / totalVentas) * 100;
    return (
        <>
            <tr onClick={() =>usuarioFindId(usuario.id) }>
                <td >{usuario.nombre} </td>
                <td>$ {usuario.facturacion}</td>
                <td>{usuario.ventas}</td>
                <td>{porcentajeVentas.toFixed(2)}%</td>
            </tr>
        </>
    )
}
