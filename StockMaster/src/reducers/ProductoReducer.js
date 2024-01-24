export const ProductoReducer = (state = [],action) => {

    switch (action.type) {
        case 'loadingProductos':
            return action.payload
            
    
        default:
            state;
    }
}