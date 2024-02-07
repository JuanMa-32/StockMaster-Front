import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductosRow = ({ producto }) => {
    const navegate = useNavigate()
    let verificar = false;
    const productoById = (idProducto) => {
        if(verificar===true){
            navegate(`/producto`)
        }else {

            navegate(`/producto/${idProducto}`)
        }
    }
    const productoBy = () => {
        verificar=true
        
    }
    return (
        <>
            <tr onClick={() => productoById(producto.id)}>
                <td >{producto.nombre} </td>
                <td>{producto?.categoria?.nombre}</td>
                <td>{producto?.stockActual}</td>
                <td>{producto?.precio}</td>
                <td>-</td>
                <td><button className='btn'onClick={() => productoBy()} ><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
        </>
    )
}
