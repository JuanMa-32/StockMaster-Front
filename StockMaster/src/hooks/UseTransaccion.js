import { useReducer } from "react"
import { TransaccionReducer } from './../reducers/TransaccionReducer';
import { findAllTransacciones } from "../services/TransaccionService";


export const UseTransaccion = () => {
    const [transacciones, dispatch] = useReducer(TransaccionReducer, [])

    const getTransacciones = async () => {
        const response = await findAllTransacciones();
        console.log(response.data);
        dispatch({
            type: 'loadingVentas',
            payload: response.data
        })
    }

    return {
        //fUNCIONES
        getTransacciones,
        //VARIABLES
        transacciones
    }
}
