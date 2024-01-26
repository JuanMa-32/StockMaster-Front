import axios from "axios";

const URL = 'http://localhost:8004'

export const findAllTransacciones = async () => {
    try {
        return await axios.get(`${URL}`)
    } catch (error) {
        console.log(error);
    }
}