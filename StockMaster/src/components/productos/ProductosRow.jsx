import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductosRow = ({ producto }) => {
    const navegate = useNavigate()
    const productoById = (idProducto) => {
        navegate(`/producto/${idProducto}`)
    }
    return (
        <>
            <tr onClick={() => productoById(producto.id)}>
                <td >{producto.nombre} </td>
                <td>{producto?.categoria}</td>
                <td>{producto?.stockActual}</td>
                <td>{producto?.precio}</td>
                <td>-</td>
                <td><FontAwesomeIcon icon={faTrash} /></td>
            </tr>
        </>
    )
}
