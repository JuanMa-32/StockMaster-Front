import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UsuarioRow = ({ usuario,totalVentas }) => {
    const navigate=useNavigate()
    const usuarioFindId=(idUsuario) => {
        navigate(`/usuario/${idUsuario}`)
    }
    
    const porcentajeVentas = totalVentas !== 0 ? ((usuario.ventas / totalVentas) * 100).toFixed(2) : 0;
    return (
        <>
            <tr onClick={() =>usuarioFindId(usuario.id) } className="clickable-row"> 
                <td >{usuario.nombre} </td>
                <td>$ {usuario.facturacion}</td>
                <td>{usuario.ventas}</td>
             <td>{porcentajeVentas} %</td>
            </tr>
        </>
    )
}
