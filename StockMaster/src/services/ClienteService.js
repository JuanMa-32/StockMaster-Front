
import axios from "axios"
import { Await } from "react-router-dom"
const url = 'http://localhost:8002'
export const ClienteAll = async()=>{
    try {
        const respuesta = await axios.get(url)
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
export const ClienteSave = async (cliente)=>{
    try {
      return await axios.post(url,cliente); 

    } catch (error) {
        return error;
    }

}
export const ClienteUpdate = async(cliente)=>{
    console.log(cliente);
    try {
        console.log('hola');
        const respuesta= await axios.put(`${url}/${cliente.id}`,cliente)
        console.log(respuesta);
        
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const ClienteDelete = async (id)=>{
    try {
        return await axios.delete(`${url}/${id}`)
    
    } catch (error) {
        return error;
    }
}