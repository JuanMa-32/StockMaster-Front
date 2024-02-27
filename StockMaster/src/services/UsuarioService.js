import axios from "axios";

// const URL = 'http://localhost:8001'
// const URL_NEGOCIO = 'http://localhost:8005'
const URL = 'http://ec2-3-87-4-174.compute-1.amazonaws.com:8001'
const URL_NEGOCIO = 'http://ec2-54-167-29-213.compute-1.amazonaws.com:8005'

export const save = async (usuario,idNegocio) => {
    try {
        const response = await axios.post(`${URL}/${idNegocio}`, usuario)
        return response
    } catch (error) {
       throw error
    }
}

export const findByEmail = async (email) => {
    
    try {
        const response = await axios.get(`${URL}/buscarPorEmail/${email}`, // Datos del usuario a enviar
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response;
    } catch (error) {
        console.log('Error al enviar la solicitud:', error);
       
    }
}
export const findByIdUsuario = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const findAll = async (idNegocio) => {
    try {
        return await axios.get(`${URL_NEGOCIO}/usuarios/${idNegocio}`)
    } catch (error) {
        throw error
    }
}

export const updatePassword = async (id,password) => {
    try {
        return await axios.put(`${URL}/cambiar-password/${id}?password=${password}`)
    } catch (error) {
        console.log(error);
    }
}
