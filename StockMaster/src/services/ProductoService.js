import axios from "axios"

// const URL = 'http://localhost:8003'
// const URL_NEGOCIO = 'http://localhost:8005'
const URL = 'http://ec2-54-89-163-172.compute-1.amazonaws.com:8003'
const URL_NEGOCIO = 'http://ec2-54-167-29-213.compute-1.amazonaws.com:8005'

export const findAllProductos = async (idNegocio) => {
    try {
        return await axios.get(`${URL_NEGOCIO}/productos/${idNegocio}`)
    } catch (error) {
        console.log(error);
    }
}

export const saveProducto = async (producto,idNegocio) => {
    try {
        const response = await axios.post(`${URL}/${idNegocio}`,producto)
        return response
    } catch (error) {
        throw error
    }
}
export const findAllCategoria = async()=>{
    try {
        const respuesta = await axios.get(`${URL}/categoria`)
        return respuesta;
    } catch (error) {
        return error;
    }
}
export const saveCategoria = async(categoria)=>{
    try {
        const respuesta = await axios.post(`${URL}/categoria`,categoria)
        return respuesta;
    } catch (error) {
        return error;
    }
}
export const findByIdProducto = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const updateProducto = async (producto,id) => {
    try {
        await axios.put(`${URL}/${id}`,producto)
    } catch (error) {
        console.log(error);
    }
}

export const deletePorducto = async (id,idNegocio) => {
    try {
        await axios.delete(`${URL}/${id}/${idNegocio}`)
    } catch (error) {
        console.log(error);
    }
}