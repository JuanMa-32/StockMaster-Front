import React, { useContext, useEffect } from 'react'
import { AppContext } from './../../context/AppContext';
import { ProductosRow } from './ProductosRow';

export const ProductosList = ({productos}) => {


    return (
        <>
            {productos.length === 0 ?
                (<h1 style={{ textAlign: 'center', marginTop: '120px' }}>¿Qué tal adicionar su primer producto?</h1>)
                :
                (<table className="table table-hover table-light caption-top" >
                    <thead >
                        <tr >
                            <th className="col-3" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Producto</th>
                            <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Categoria</th>
                            <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Stock</th>
                            <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Precio</th>
                            <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Catalogo</th>
                            <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos?.map(producto =>
                            <ProductosRow key={producto.id} producto={producto} />
                        )}
                    </tbody>
                </table>
                )}

        </>
    )
}
