import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

export const ListClient = ({ seleccionarClient }) => {
    const { clientes, todosClientes,handlerCloseModal } = useContext(AppContext)
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    useEffect(() => {
        todosClientes()
    }, [])

    const handleSelectClient = (clienteId) => {
        setClienteSeleccionado(clienteId);
      };

    const onSubmitClient = () => {
        seleccionarClient(clienteSeleccionado)
        handlerCloseModal()
    }

    return (
        <>
      <table className="table table-hover table-light table-borderless">
        <tbody>
          {clientes?.map(cliente => (
            <tr key={cliente.id} >
              <td
               className='col-12'
              >
                <button  onClick={() => handleSelectClient(cliente.id)}
                className={cliente.id === clienteSeleccionado ? ' btn selected-row w-100' : 'btn'}>{cliente.nombre}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn  mx-3"style={{ background: "#63E6BE", color: 'white' }} onClick={onSubmitClient}>
        Seleccionar cliente
      </button>
      <button className="btn btn-light" onClick={handlerCloseModal}>
        Cancelar
      </button>
    </>
    )
}
