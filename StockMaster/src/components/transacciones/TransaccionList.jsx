import React, { useContext, useEffect } from 'react'
import { AppContext } from './../../context/AppContext';
import { TransaccionRow } from './TransaccionRow';

export const TransaccionList = ({ventas}) => {
  
    
  return (
    <>
     {ventas.length === 0 ?
                (<h1 style={{ textAlign: 'center', marginTop: '120px' }}>Todavia no hay ventas.</h1>)
                :
            (<table className="table table-hover table-light mt-3 caption-top" >
                <thead >
                    <tr >
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Código</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Fecha</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Cliente</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Vendedor</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Items</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Valor</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Tipo</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Obs</th>
                        <th style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ventas?.map(transaccion =>
                            <TransaccionRow key={transaccion.id} transaccion={transaccion} />
                        )
                    }
                </tbody>
            </table>)}
        </>
  )
}
