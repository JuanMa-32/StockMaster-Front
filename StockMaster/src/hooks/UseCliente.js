import { useReducer, useState } from "react"
import { ClienteReducer } from "../reducers/ClienteReducer"
import { ClienteAll, ClienteDelete, ClienteSave, ClienteUpdate } from "../services/ClienteService"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const UseCliente = () => {

    //Estados
    const [clientes, dispatch] = useReducer(ClienteReducer, [])
    const [errorCliente, seterrorCliente] = useState({})
    const nav = useNavigate()

    const addCliente = async (cliente, idNegocio) => {
        try {
            if (cliente.id) {
                await ClienteUpdate(cliente);
                Swal.fire
                    ('Exito', 'El cliente fue editado con exito', 'success')
            } else {
                let response = await ClienteSave(cliente, idNegocio);
                dispatch({
                    type: 'addCliente',
                    payload: response.data
                })
                Swal.fire
                    ('Exito', 'El cliente fue creado con exito', 'success')
            }
            nav('/clientePrincipal')
            seterrorCliente({})
        } catch (error) {
            if (error.response && error.response.status == 404) {
                seterrorCliente(error.response.data)
            }

        }

    }
    const todosClientes = async (idNegocio) => {
        const response = await ClienteAll(idNegocio);
        dispatch({
            type: 'listaCliente',
            payload: response.data
        })
    }

    const deleteCliente = async (id, idNegocio) => {

        Swal.fire({
            title: "Eliminar?",
            text: "Esta Seguro que desea eliminar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "Si, Eliminar!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await ClienteDelete(id, idNegocio)
                dispatch({
                    type: 'eliminarCliente',
                    payload: id
                })
                Swal.fire({
                    title: "Eliminado!",
                    text: "El cliente fue eliminado.",
                    icon: "success"
                });
            }
        });

    }

    return {
        //FUNCIONES
        addCliente,
        todosClientes,
        deleteCliente,
        //VARIABLES
        clientes,
        errorCliente
    }
}
