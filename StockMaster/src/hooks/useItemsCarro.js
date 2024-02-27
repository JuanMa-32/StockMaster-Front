import { useReducer } from "react"
import { itemsReducer } from "../reducers/itemsReducer"


export const useItemsCarro = () => {
  
  const [cartItems, dispatch] = useReducer(itemsReducer, [])

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
        dispatch({
                type: 'updateCantidadProductoCarro',
                payload: product,
            });
    } else {
        dispatch({
            type: 'addProductoCarro',
            payload: product,
        });
    }
}

const restarProducto = (product) => {
    dispatch({
            type: 'restarCantidadProductoCarro',
            payload: product,
        });
}
const restablecerCarro = () => {
    dispatch({
        type:'vaciarCarro'
    })
}

const handlerDeleteProductCart = (id) => {
    dispatch({
            type: 'deleteProductoCarro',
            payload: id,
        })
}

  
    return {
        //FUNCIONES
        restablecerCarro,
        handlerAddProductCart,
        handlerDeleteProductCart,
        restarProducto,
        //VARIABLES
        cartItems,
    }
}
