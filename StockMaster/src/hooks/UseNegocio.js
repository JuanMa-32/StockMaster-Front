import { useState } from "react";
import { findByIdNegocio, update } from "../services/NegocioService";
import { useNavigate } from "react-router-dom";


export const UseNegocio = () => {
    const [negocio, setnegocio] = useState({})
 
    const navigateN = useNavigate()

    const saveConfiguraciones = async (negocio) => {
        try {
            const response = await update(negocio);
            setnombre(response.data.nombreComercio)
           navigateN('/vender')
        } catch (error) {
            console.log(error);
        }
       
    }

    const negocioSelected = async (id) => {
        const response = await findByIdNegocio(id)
        setnegocio(response.data)
    }


    return {
        //FUNCIONES
        saveConfiguraciones,
        negocioSelected,
        //VARAIBLES
        negocio,
        
    }
}
