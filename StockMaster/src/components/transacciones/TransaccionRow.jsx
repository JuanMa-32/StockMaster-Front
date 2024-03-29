import { faCommentDots, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal, ModalHeader } from "react-bootstrap";

export const TransaccionRow = ({ transaccion }) => {
    const fecha = transaccion.fecha;
    const fechaFormat = new Date(fecha);

    const fechaFormateada = fechaFormat.toLocaleDateString();
    const opcionesHora = { hour: '2-digit', minute: '2-digit' };
    const horaFormateada = fechaFormat.toLocaleTimeString(undefined, opcionesHora);

    const navegate = useNavigate()

    const handleClick = (transaccionId) => {
        navegate(`/venta/${transaccionId}`)
    };

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <tr onClick={() => handleClick(transaccion.id)} className="clickable-row">
                <td >{transaccion.id} </td>
                <td >{fechaFormateada},<b> {horaFormateada}</b> </td>
                <td >{transaccion?.cliente?.nombre} </td>
                <td >{transaccion?.usuario?.nombre} </td>
                <td style={{ color: '#63E6BE' }} > <h6>{transaccion.items} Items</h6> </td>
                <td ><FontAwesomeIcon icon={faMoneyCheckDollar} size="sm" /> $ {transaccion.total} </td>
                <td >- </td>
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
                        <Modal.Body>{transaccion.observacion}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={(e) => { e.stopPropagation(); setShowModal(false); }}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
                <td > </td>
            </tr>
        </>
    )
}
