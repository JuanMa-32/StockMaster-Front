export const ProductoReducer = (state = [], action) => {

    switch (action.type) {
        case 'loadingProductos':
            return action.payload
        case 'addProducto':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
            case 'eliminarProducto':
                return state.filter(producto=>producto.id !== action.payload)

        default:
            state;
    }
}