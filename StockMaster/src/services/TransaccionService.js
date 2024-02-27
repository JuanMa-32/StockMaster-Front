import axios from "axios";

// const URL = 'http://localhost:8004'
// const URL_NEGOCIO = 'http://localhost:8005'
const URL = 'http://ec2-44-220-162-81.compute-1.amazonaws.com:8004'
const URL_NEGOCIO = 'http://ec2-54-167-29-213.compute-1.amazonaws.com:8005'

export const findAllTransacciones = async (idNegocio) => {
    try {
        return await axios.get(`${URL_NEGOCIO}/ventas/${idNegocio}`)
    } catch (error) {
        console.log(error);
    }
}
export const findByIdVenta = async(id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const vender = async (venta,idNegocio) => {
try {
    const response = await axios.post(`${URL}/${idNegocio}`,venta)
    return response
} catch (error) {
    console.log(error);
}
}