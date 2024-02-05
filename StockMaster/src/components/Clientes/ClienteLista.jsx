import React, { useContext, useEffect, useState } from 'react'
import { ClienteAll, ClienteDelete } from '../../services/ClienteService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'


export const ClienteLista = ({ clientes }) => {
  const navegate = useNavigate()

  const eliminarCliente = async (id) => {
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

        await ClienteDelete(id)
        todosClientes();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const verCliente = (clienteid) => {
    navegate(`/clienteFormulario/${clienteid}`)
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <table className="table table-hover table-light m-2 caption-top">
        <thead>
          <tr>

            <th scope="col" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Nombre</th>
            <th scope="col" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Celular/WhatsApp</th>
            <th scope="col" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Email</th>
            <th scope="col" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}>Saldo actual</th>
            <th scope="col" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}></th>
            <th scope="col" style={{ color: '#92939e', fontfamily: 'Kanit, sans-serif' }}></th>


          </tr>
        </thead>
        <tbody>
          {clientes?.map(c => (
            <tr key={c.id} onClick={() => verCliente(c.id)}>
              <td>{c.nombre}</td>
              <td>{c.telefono}</td>
              <td>{c.email}</td>
              <td>completar</td>
              <td>
                <button
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                ><FontAwesomeIcon icon={faCommentDots} /></button>
                <Modal show={showModal} onClick={(e) => { e.stopPropagation(); setShowModal(false); }}>
                  <Modal.Header closeButton>
                    <Modal.Title>Observaciones</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{c.observaciones}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => { e.stopPropagation(); setShowModal(false); }}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
              <td>
                <button className='btn'>
                  <FontAwesomeIcon onClick={() => eliminarCliente(c.id)} icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>

    </div>
  )
}
