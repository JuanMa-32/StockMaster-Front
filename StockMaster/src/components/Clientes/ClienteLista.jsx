import React, { useEffect, useState } from 'react'
import { ClienteAll, ClienteDelete } from '../../services/ClienteService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ClienteLista = () => {
  const navegar = useNavigate()
  const [clientes, setClientes] = useState([])
  const traerTodosLosClientes = async () => {
    const respuesta = await ClienteAll()

    setClientes(respuesta.data)
    //  console.log(clientes);

  }
  const eliminarCliente = async(id) => {
    Swal.fire({
      title: "Eliminar?",
      text: "Esta Seguro que desea eliminar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setClientes(clientes.filter(u=>u.id!=id))
       await ClienteDelete(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  const verCliente = (id) => {
    if (id) {
      navegar(`/clienteFormulario/${id}`)
    } else {
      navegar('/clienteFormulario')
    }

  }
  useEffect(() => {
    traerTodosLosClientes()
  }, [])

  return (
    <div>
      <table className="table table-hover table-light m-2">
        <thead>
          <tr>

            <th scope="col" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Nombre</th>
            <th scope="col" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Celular</th>
            <th scope="col" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Email</th>
            <th scope="col" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Ver</th>
            <th scope="col" style={{ color: '#888888', fontFamily: 'Arial, Helvetica, sans-serif' }}>Eliminar</th>

          </tr>
        </thead>
        <tbody>
          {clientes?.map(c => (
            <tr key={c.id}>

              <td>{c.nombre}</td>
              <td>{c.telefono}</td>
              <td>{c.email}</td>
              <td>
                <FontAwesomeIcon onClick={() => verCliente(c.id)} icon={faMagnifyingGlass} />
              </td>
              <td>
                <FontAwesomeIcon onClick={()=>eliminarCliente(c.id)} icon={faTrash} />
              </td>
            </tr>
          ))}


        </tbody>
      </table>

    </div>
  )
}
