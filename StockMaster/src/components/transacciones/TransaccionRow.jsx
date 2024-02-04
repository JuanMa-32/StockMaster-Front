import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const TransaccionRow = ({ transaccion }) => {
    const fecha = transaccion.fecha;
    const fechaFormat = new Date(fecha);

    const fechaFormateada = fechaFormat.toLocaleDateString();
    const opcionesHora = { hour: '2-digit', minute: '2-digit' };
    const horaFormateada = fechaFormat.toLocaleTimeString(undefined, opcionesHora);

    const navegate = useNavigate()

    const handleClick = (transaccionId) => {
        navegate(`/usuarios/${transaccionId}`)
    };

    return (
        <>
            <tr onClick={() => handleClick(1)}>
                <td >{transaccion.id} </td>
                <td >{fechaFormateada},<b> {horaFormateada}</b> </td>
                <td >{transaccion?.cliente?.nombre} </td>
                <td >{transaccion?.usuario?.nombre} </td>
                <td style={{ color: '#63E6BE' }} > <h6>{transaccion.items} Items</h6> </td>
                <td ><FontAwesomeIcon icon={faMoneyCheckDollar} size="sm" /> $ {transaccion.total} </td>
                <td >- </td>
                <td >{transaccion?.observacion} </td>
                <td > </td>

            </tr>
        </>
    )
}
