export const UsuarioReducer = (state = [],action) => {

    switch (action.type) {
        case 'loadingUsuarios':
            return action.payload
        case 'addUsuario':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]    
    }
}