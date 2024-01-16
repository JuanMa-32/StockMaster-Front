
import axios from "axios"
const url = 'http://localhost:8002'
export const ClienteAll = async()=>{
    try {
        const respuesta = await axios.get(url)
        return respuesta
    } catch (error) {
        return error;
    }
   

}