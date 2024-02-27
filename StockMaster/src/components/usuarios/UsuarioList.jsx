import React, { useContext, useEffect, useState } from 'react'
import { UsuarioRow } from './UsuarioRow'
import { AppContext } from './../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';

export const UsuarioList = () => {
    const { loadingUsuarios, usuarios } = useContext(AppContext)
    const {login} = useContext(AuthContext);
    const [totalVentas, setTotalVentas] = useState(0);
   
    useEffect(() => {
        loadingUsuarios(login.idNegocio)
        
    }, [])
    useEffect(() => {
        if (usuarios && usuarios.length > 0) {
            const total = usuarios.reduce((total, usuario) => total + usuario.ventas, 0);
            setTotalVentas(total);
        }
    }, [usuarios]);
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
