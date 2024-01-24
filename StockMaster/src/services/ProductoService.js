import axios from "axios"

const URL = 'http://localhost:8003'

export const findAllProductos = async () => {
    try {
        return await axios.get(`${URL}`)
    } catch (error) {
        console.log(error);
    }
}