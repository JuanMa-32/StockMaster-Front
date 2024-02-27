import React, { useContext, useState } from 'react'
import {  ClienteDelete } from '../../services/ClienteService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faTrash } from '@fortawesome/free-solid-svg-icons'

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { AppContext } from './../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';


export const ClienteLista = ({ clientes }) => {
  const navegate = useNavigate()
  const{deleteCliente}=useContext(AppContext)
  const{login}=useContext(AuthContext)

  const verCliente = (clienteid) => {
    navegate(`/clienteFormulario/${clienteid}`)
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {clientes?.length === 0 ? (
        <h1 style={{ textAlign: 'center', marginTop: '120px' }}>¿Vamos a registrar al primer cliente?</h1>
      ) : (
        <>
          <table className="table table-hover table-light m-2 caption-top">
            <thead>
              <tr>
                <th scope="col" style={{ color: '#92939e', fontFamily: 'Kanit, sans-serif' }}>Nombre</th>
                <th scope="col" style={{ color: '#92939e', fontFamily: 'Kanit, sans-serif' }}>Celular/WhatsApp</th>
                <th scope="col" style={{ color: '#92939e', fontFamily: 'Kanit, sans-serif' }}>Email</th>
                <th scope="col" style={{ color: '#92939e', fontFamily: 'Kanit, sans-serif' }}>Saldo actual</th>
                <th scope="col" style={{ color: '#92939e', fontFamily: 'Kanit, sans-serif' }}></th>
                <th scope="col" style={{ color: '#92939e', fontFamily: 'Kanit, sans-serif' }}></th>
              </tr>
            </thead>
            <tbody>
              {clientes?.map(c => (
                <tr key={c.id} onClick={() => verCliente(c?.id)} className="clickable-row">
                  <td>{c?.nombre}</td>
                  <td>{c?.telefono}</td>
                  <td>{c?.email}</td>
                  <td>-</td>
                  <td>
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModal((prevState) => ({ ...prevState, [c.id]: true }));
                      }}
                    >
                      <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                    <Modal
                      key={c.id}
                      show={showModal[c.id]}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModal((prevState) => ({ ...prevState, [c.id]: false }));
                      }}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Observaciones</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{c.observaciones}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={(e) => { e.stopPropagation(); setShowModal((prevState) => ({ ...prevState, [c.id]: false })); }}>
                          Cerrar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>
                    <button className='btn' onClick={(e) => { e.stopPropagation(); deleteCliente(c?.id,login.idNegocio); }}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
  
}
