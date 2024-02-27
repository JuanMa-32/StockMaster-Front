export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                idNegocio: action.payload.idNegocio,
                idUser:action.payload.id,
                user:action.payload
               
            };
        case 'logout':
            return {
                isAuth: false,
                isAdmin: false,
                user: undefined,
            };
        default:
            return state;
    }

}