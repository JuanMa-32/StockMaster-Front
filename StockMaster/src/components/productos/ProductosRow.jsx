import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ProductosRow = ({ producto }) => {
    return (
        <>
            <tr>
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
