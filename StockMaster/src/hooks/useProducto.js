import { useReducer } from "react"
import { ProductoReducer } from "../reducers/ProductoReducer"
import { findAllProductos, saveProducto } from "../services/ProductoService"


export const useProducto = () => {
  const [productos, dispatch] = useReducer(ProductoReducer,[])

  const getProductos = async () => {
    const response = await findAllProductos();
    dispatch({
        type: 'loadingProductos',
        payload:response.data
    })
  }

  const addProducto = async (producto) => {
    try {
      const response = await saveProducto(producto);
    } catch (error) {
      console.log(error);
    }
  }
  
    return {
        //FUNCIONES
        getProductos,
        addProducto,
        //VARIABLES
        productos
  }
}
