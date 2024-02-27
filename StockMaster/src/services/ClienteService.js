
import axios from "axios"
// const url = 'http://localhost:8002'
// const URL_NEGOCIO = 'http://localhost:8005'
const url = 'http://ec2-54-221-174-232.compute-1.amazonaws.com:8002'
const URL_NEGOCIO = 'http://ec2-54-167-29-213.compute-1.amazonaws.com:8005'

export const ClienteAll = async(idNegocio)=>{
    try {
        const respuesta = await axios.get(`${URL_NEGOCIO}/clientes/${idNegocio}`)
        return respuesta
    } catch (error) {
        return error;
    }
 
}
export const ClienteFindById= async (id)=>{
    try {
    return await axios.get(`${url}/${id}`)
        
    } catch (error) {
       return error; 
    }
    
}    
export const ClienteSave = async (cliente,idNegocio)=>{
    try {
      return await axios.post(`${url}/${idNegocio}`,cliente); 
    } catch (error) {
        throw error
    }

}
export const ClienteUpdate = async(cliente)=>{
   
    try {
        const respuesta= await axios.put(`${url}/${cliente.id}`,cliente)
        console.log(respuesta);
    } catch (error) {
        throw error
    }
}
export const ClienteDelete = async (id,idNegocio)=>{
    try {
       
        const response = await axios.delete(`${url}/${id}/${idNegocio}`)
        return response
    } catch (error) {
        console.log(error);;
    }
}