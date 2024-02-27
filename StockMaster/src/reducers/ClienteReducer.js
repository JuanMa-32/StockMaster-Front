export const ClienteReducer = (state = [], action) => {
    switch (action.type) {
        case 'listaCliente':
            return action.payload;
        case 'addCliente':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case 'updateCliente':
            return state.map(p => {
                if (p.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return p;
            })
            case 'eliminarCliente':
                return state.filter(cliente=>cliente.id !== action.payload)
        default:
            state;
    }

}