import { useReducer } from "react"
import { TransaccionReducer } from './../reducers/TransaccionReducer';
import { findAllTransacciones } from "../services/TransaccionService";


export const UseTransaccion = () => {
    const [transacciones, dispatch] = useReducer(TransaccionReducer, [])

    const getTransacciones = async (idNegocio) => {
        const response = await findAllTransacciones(idNegocio);
        dispatch({
            type: 'loadingVentas',
            payload: response.data
        })
    }
    const vender = async (productos, total) => {
        console.log(productos);
        console.log(total);
    }

    return {
        //fUNCIONES
        getTransacciones,
        vender,
        //VARIABLES
        transacciones
    }
}
