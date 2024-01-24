export const ClienteReducer = (state=[],action)=>{
    switch (action.type) {
        case 'listaCliente':
            return action.payload;
            case 'addCliente':
                return [
                    ...state,
                    {
                        ...action.payload,//el payload es el valor
                    }
                ];     
            case 'updateCliente':
                return state.map(p => {
                    if (p.id === action.payload.id) {
                        return {
                            ...action.payload
                        };
                    }
                    return p;
                })
        default:
            break;
    }

}