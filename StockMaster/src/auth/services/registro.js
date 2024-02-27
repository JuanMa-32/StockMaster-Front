import axios from "axios";

// const URL_NEGOCIO = 'http://localhost:8005'
const URL_NEGOCIO = 'http://ec2-54-167-29-213.compute-1.amazonaws.com:8005'
export const saveNegocio = async (negocio) => {
    try {
        const response = await axios.post(
            `${URL_NEGOCIO}`, 
            negocio, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response;
    } catch (error) {
       
        throw error;
    }
}