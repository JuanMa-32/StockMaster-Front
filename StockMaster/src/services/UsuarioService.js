import axios from "axios";

const URL = 'http://localhost:8001'

export const save = async (usuario) => {
    try {
        const response = await axios.post(`${URL}`, usuario)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const findAll = async () => {
    try {
        return await axios.get(`${URL}`)
    } catch (error) {
        throw error
    }
}
