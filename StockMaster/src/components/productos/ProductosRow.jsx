import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';

export const ProductosRow = ({ producto }) => {
    const navegate = useNavigate()
    const {eliminarProducto}= useContext(AppContext)
    const {login} = useContext(AuthContext);

    const productoById = (idProducto) => {
        navegate(`/producto/${idProducto}`)
    }
    
    return (
        <>
            <tr onClick={() => productoById(producto.id)} className="clickable-row">
                <td >{producto.nombre} </td>
                <td>{producto?.categoria?.nombre}</td>
                <td>{producto?.stockActual}</td>
                <td>{producto?.precio}</td>
                <td>-</td>
                <td><button className='btn' onClick={(e) => { e.stopPropagation(); eliminarProducto(producto?.id,login.idNegocio); }} ><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
        </>
    )
}
