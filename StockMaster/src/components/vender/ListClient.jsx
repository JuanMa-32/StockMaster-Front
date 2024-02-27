import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { AuthContext } from './../../auth/context/AuthContext';
import { Link } from 'react-router-dom';

export const ListClient = ({ seleccionarClient }) => {
  const { clientes, todosClientes, handlerCloseModal } = useContext(AppContext)
  const { login } = useContext(AuthContext);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  useEffect(() => {
    todosClientes(login.idNegocio)
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
      {clientes.length === 0 ?
        (<>
          <h3 style={{ textAlign: 'center', marginTop: '120px' }}>¿Vamos a registrar al primer cliente?</h3>
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Añada los datos clicando en el botón abajo</p>
          <Link to={'/clienteFormulario'} className='btn' style={{
            backgroundColor: '#63E6BE', textAlign: 'center',
            marginLeft: '200px', marginTop: '35px', color: 'white'
          }}>+ Cliente</Link>
        </>) :
        (<> <table className="table table-hover table-light table-borderless">
          <tbody>
            {clientes?.map(cliente => (
              <tr key={cliente.id}className='' >
                <td
                  className='col-12 '
                >
                    <button
            onClick={() => handleSelectClient(cliente.id)}
            className={cliente.id === clienteSeleccionado ? 'no-hover btn selected-row w-100 ' : 'btn w-100'}

          >
            {cliente.nombre}
          </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          <button className="btn  mx-3" style={{ background: "#63E6BE", color: 'white' }} onClick={onSubmitClient}>
            Seleccionar cliente
          </button>
          <button className="btn btn-light" onClick={handlerCloseModal}>
            Cancelar
          </button>
        </>
        )}

    </>
  )
}
