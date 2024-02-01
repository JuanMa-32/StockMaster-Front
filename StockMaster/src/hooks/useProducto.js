import { useReducer, useState } from "react"
import { ProductoReducer } from "../reducers/ProductoReducer"
import { findAllProductos, saveCategoria, saveProducto } from "../services/ProductoService"
import { Await } from "react-router-dom";


export const useProducto = () => {
  const [visibleCategoria,setVisibleCategoria]=useState(false);
  const [productos, dispatch] = useReducer(ProductoReducer,[])
  const openModalCategoria = () => {
    setVisibleCategoria(true)
}
const cerrarModalCategoria = () => {
    setVisibleCategoria(false)
}

  const getProductos = async () => {
    const response = await findAllProductos();
    dispatch({
        type: 'loadingProductos',
        payload:response.data
    })
  }

  const addProducto = async (producto) => {
    try {
      return response = await saveProducto(producto);
    } catch (error) {
      console.log(error);
    }
  }
  const addCategoria = async (categoria)=>{
    try {
      return respuesta= await saveCategoria(categoria);
    } catch (error) {
      return error;
    }
  }
  
    return {
        //FUNCIONES
        getProductos,
        addProducto,
        //VARIABLES
        productos,
        openModalCategoria,
        cerrarModalCategoria,
        visibleCategoria,
        addCategoria,
  }
}
