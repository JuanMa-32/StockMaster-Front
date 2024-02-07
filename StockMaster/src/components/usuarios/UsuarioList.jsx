import React, { useContext, useEffect, useState } from 'react'
import { UsuarioRow } from './UsuarioRow'
import { AppContext } from './../../context/AppContext';

export const UsuarioList = () => {
    const { loadingUsuarios, usuarios } = useContext(AppContext)
    const [totalVentas, setTotalVentas] = useState(0);
    useEffect(() => {
        loadingUsuarios()
      
        const total = usuarios.reduce((acc, usuario) => acc + usuario.ventas, 0);
        setTotalVentas(total);
    }, [])
    return (
        <>
            <table className="table table-hover table-light caption-top" >
                <thead >
                    <tr >
                        <th className="col-6" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Nombre</th>
                        <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Facturación</th>
                        <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Ventas</th>
                        <th className="col-1" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>%</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios?.map(usuario =>
                            <UsuarioRow key={usuario.id} usuario={usuario}  totalVentas={totalVentas} />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
