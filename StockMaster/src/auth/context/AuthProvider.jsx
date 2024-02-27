
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const {
        //VARIABLS
        login,
        registroInit,
        error,
        errorMail,
        //FUNCIONES
        handlerLogin,
        handlerRegistro,
        handlerLogout
    } = useAuth()
    return (
        <AuthContext.Provider value={
            {
                //VARIABLS
                login,
                registroInit,
                error,
                errorMail,
                //FUNCIONES
                handlerLogin,
                handlerRegistro,
                handlerLogout
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}
