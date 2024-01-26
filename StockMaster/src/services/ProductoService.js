import axios from "axios"

const URL = 'http://localhost:8003'

export const findAllProductos = async () => {
    try {
        return await axios.get(`${URL}`)
    } catch (error) {
        console.log(error);
    }
}

export const saveProducto = async (producto) => {
    try {
        const response = await axios.post(`${URL}`,producto)
        return response
    } catch (error) {
        throw error
    }
}