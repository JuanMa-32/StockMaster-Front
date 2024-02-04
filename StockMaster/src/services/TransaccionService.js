import axios from "axios";

const URL = 'http://localhost:8004'

export const findAllTransacciones = async () => {
    try {
        return await axios.get(`${URL}`)
    } catch (error) {
        console.log(error);
    }
}
export const vender = async (venta) => {
try {
    const response = await axios.post(`${URL}`,venta)
    return response
} catch (error) {
    console.log(error);
}
}