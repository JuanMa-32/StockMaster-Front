export const categoriaReducer = (state = [], action) => {
    switch (action.type) {
        case 'loadingCategorias':
            return action.payload


        default:
            state;
    }
}