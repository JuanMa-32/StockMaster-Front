
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
        return await axios.put(`${url}/${id}`,cliente)
        
    } catch (error) {
        return error;
    }
}