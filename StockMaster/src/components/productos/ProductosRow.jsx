import React from 'react'

export const ProductosRow = ({ producto }) => {
    return (
        <>
          
                <td >{producto.nombre} </td>
                <td>$ 100</td>
                <td>{producto.precio}</td>
                <td>%100</td>
           
        </>
    )
}
