import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ProductosList = () => {
    return (
        <>
            <table className="table table-hover table-light" >
                <thead >
                    <tr >
                        <th className="col-3" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Producto</th>
                        <th className="col-1" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Categoria</th>
                        <th className="col-1" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Stock</th>
                        <th className="col-1" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Precio</th>
                        <th className="col-1" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Catalogo</th>
                        <th className="col-1" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >sdad </td>
                        <td>$ 100</td>
                        <td>sdsada</td>
                        <td>%100</td>
                        <td>%100</td>
                        <td><FontAwesomeIcon icon={faTrash} /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
