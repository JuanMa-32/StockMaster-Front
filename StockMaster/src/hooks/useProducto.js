import { useReducer } from "react"
import { ProductoReducer } from "../reducers/ProductoReducer"
import { findAllProductos } from "../services/ProductoService"


export const useProducto = () => {
  const [productos, dispatch] = useReducer(ProductoReducer,[])

  const getProductos = async () => {
    const response = await findAllProductos();
    dispatch({
        type: 'loadingProductos',
        payload:response.data
    })
  }
  
    return {
        //FUNCIONES
        getProductos,
        //VARIABLES
        productos
  }
}
