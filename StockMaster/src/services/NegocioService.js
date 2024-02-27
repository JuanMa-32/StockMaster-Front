import axios from "axios";

const URL_NEGOCIO = 'http://ec2-54-167-29-213.compute-1.amazonaws.com:8005'

export const update = async (negocio) => {
    try {
        const response = await axios.put(`${URL_NEGOCIO}/configuraciones/${negocio.id}`,negocio,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const findByIdNegocio = async (id) => {
    try {
        const response = await axios.get(`${URL_NEGOCIO}/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}