import { useReducer } from "react"
import { ClienteReducer } from "../reducers/ClienteReducer"
import { ClienteAll, ClienteSave, ClienteUpdate } from "../services/ClienteService"

export const UseCliente = () => {

    //Estados
   
    const [clientes, dispatch] = useReducer(ClienteReducer, [])



    
 
    const addCliente =async (cliente)=>{
        let response
        try {
            if(cliente.id){
              response = await ClienteUpdate(cliente)  
              //console.log(response);
            }else{
                
                response = await ClienteSave(cliente);
              //  console.log(response);
            }
             
            dispatch({
                type:(cliente.id===0)?'addCliente':'updateCliente',
                payload: response.data
                    })
        } catch (error) {
          console.log(error);  
        }
    }
    const todosClientes = async () => {
        const response = await ClienteAll();
        dispatch({
            type: 'listaCliente',
            payload: response.data
        })
    }

    return {
        //FUNCIONES
        
       addCliente,
        todosClientes,
        //VARIABLES
       
        clientes
    }
}
