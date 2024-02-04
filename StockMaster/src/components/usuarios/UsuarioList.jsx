import React, { useContext, useEffect } from 'react'
import { UsuarioRow } from './UsuarioRow'
import { AppContext } from './../../context/AppContext';

export const UsuarioList = () => {

    const { loadingUsuarios, usuarios } = useContext(AppContext)

    useEffect(() => {
        loadingUsuarios()
    }, [])

    return (
        <>
            <table className="table table-hover table-light caption-top" >
                <thead >
                    <tr >
                        <th className="col-6"  style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Nombre</th>
                        <th className="col-1"  style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Facturación</th>
                        <th className="col-1"  style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Ventas</th>
                        <th className="col-1"  style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>%</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios?.map(usuario =>
                            <UsuarioRow key={usuario.id} usuario={usuario} />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
