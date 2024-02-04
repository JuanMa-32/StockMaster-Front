export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case 'addProductoCarro':
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
        case 'updateCantidadProductoCarro':

            return state.map((i) => {
                if (i.product.id === action.payload.id) {
                    return {
                        ...i,
                        quantity: i.quantity + 1,
                    };
                }
                return i;
            });
        case 'restarCantidadProductoCarro':

            return state.map((i) => {
                if (i.product.id === action.payload.id) {
                    return {
                        ...i,
                        quantity: i.quantity - 1,
                    };
                }
                return i;
            });
        case 'deleteProductoCarro':
            return state.filter((i) => i.product.id !== action.payload);

        case 'vaciarCarro':
            return []

        default:
            return state;
    }
}