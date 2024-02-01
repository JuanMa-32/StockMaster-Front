import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'

export const ListClient = () => {
    const { clientes,todosClientes } = useContext(AppContext)
    useEffect(() => {
        todosClientes()
    }, [])
    
    return (
        <>
            <table className="table table-hover table-light table-borderless">
                <tbody>
                    {
                        clientes?.map(cliente =>
                            <tr key={cliente.id}>
                                <td>{cliente.nombre}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
