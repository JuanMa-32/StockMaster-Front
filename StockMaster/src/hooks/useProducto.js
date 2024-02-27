import { useReducer, useState } from "react"
import { ProductoReducer } from "../reducers/ProductoReducer"
import { deletePorducto, findAllCategoria, findAllProductos, findByIdProducto, saveCategoria, saveProducto, updateProducto } from "../services/ProductoService"
import { categoriaReducer } from "../reducers/categoriaReducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




export const useProducto = () => {
  const [visibleCategoria, setVisibleCategoria] = useState(false);
  const [productos, dispatch] = useReducer(ProductoReducer, [])
  const [categorias, dispatchCat] = useReducer(categoriaReducer, [])
  const [productoSelected, setproductoSelected] = useState({})
  const [errorProducto, seterrorProducto] = useState({})
  const [stockInsuficiente, setStockInsuficiente] = useState(false);
  const navegar = useNavigate()

  const openModalCategoria = () => {
    setVisibleCategoria(true)
  }
  const cerrarModalCategoria = () => {
    setVisibleCategoria(false)
  }

  const handlerProductoSelected = async (id) => {
    const idNumero = parseInt(id);

    const response = await findByIdProducto(idNumero)
    setproductoSelected(response.data)

  }
  const getProductos = async (idNegocio) => {
    const response = await findAllProductos(idNegocio);
    dispatch({
      type: 'loadingProductos',
      payload: response.data
    })
  }

  const addProducto = async (producto, idNegocio) => {
    try {
      if (producto.id) {
        await updateProducto(producto, producto.id)
      } else {
        const response = await saveProducto(producto, idNegocio);
        dispatch({
          type: 'addProducto',
          payload: response.data
        })
      }
      navegar('/productos')
    } catch (error) {
     
      if (error.response && error.response.status == 400) {
        seterrorProducto(error.response.data)
      }
    }
  }
  const categoriaFindAll = async () => {
    const respuesta = await findAllCategoria();
    dispatchCat({
      type: 'loadingCategorias',
      payload: respuesta.data
    })
  }
  const addCategoria = async (categoria) => {
    try {
      return respuesta = await saveCategoria(categoria);
    } catch (error) {
      return error;
    }
  }

  const eliminarProducto = async (id, idNegocio) => {
    Swal.fire({
      title: "Eliminar?",
      text: "Esta Seguro que desea eliminar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Si, Eliminar!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deletePorducto(id, idNegocio)
        dispatch({
          type: 'eliminarProducto',
          payload: id
        })
        Swal.fire({
          title: "Eliminado!",
          text: "El producto fue eliminado.",
          icon: "success"
        });
      }
    });
  }

  const calcularStock = (producto, cantidad) => {
    if (producto.stockActual !== null && cantidad > producto.stockActual) {
      setStockInsuficiente(true);
    } else {
      setStockInsuficiente(false);
    }
  }
  return {
    //FUNCIONES
    getProductos,
    addProducto,
    categoriaFindAll,
    handlerProductoSelected,
    eliminarProducto,

    //VARIABLES
    productos,
    openModalCategoria,
    cerrarModalCategoria,
    visibleCategoria,
    addCategoria,
    categorias,
    productoSelected,
    errorProducto,
    stockInsuficiente,
    calcularStock

  }
}
