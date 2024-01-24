import React, { useContext, useEffect } from 'react'
import { AppContext } from './../../context/AppContext';
import { ProductosRow } from './ProductosRow';

export const ProductosList = () => {
    const {getProductos,productos} = useContext(AppContext)

    useEffect(() => {
        getProductos()
    }, [])
    
    return (
        <>
        {productos.length === 0 ?
         ( <h1 style={{textAlign: 'center',marginTop:'120px'}}>¿Qué tal adicionar su primer producto?</h1>)
         :
         (  <table className="table table-hover table-light" >
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
          {productos?.map(producto => 
             <ProductosRow producto={producto}/>
             )}
         </tbody>
     </table>
     )}
          
        </>
    )
}
