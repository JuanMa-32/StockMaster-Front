import { useReducer, useState } from "react"
import { loginReducer } from "../reducers/loginReducer"
import { useNavigate } from "react-router-dom"
import { findByEmail } from "../../services/UsuarioService"
import { saveNegocio } from './../services/registro';

const initLogin = {
    isAuth: false,
    isAdmin: false,
    idNegocio: 0,
    idUser: 0,
    user: {}
}

const registroInit = {
    nombre: '',
    usuarios: []
}

export const useAuth = () => {
    const [login, dispatch] = useReducer(loginReducer, [])
    const [error, seterror] = useState('')
    const [errorMail, seterrorMail] = useState('')

    const navigate = useNavigate()

    const handlerLogin = async (userLogin) => {
        try {
            const response = await findByEmail(userLogin.email);
            if (userLogin.email === response.data.email && userLogin.password === response.data.password) {
                dispatch({
                    type: 'login',
                    payload: response.data,
                })
                navigate('/vender')
                seterror('')
                seterrorMail('')
            } else {
                seterror('Correo electrónico o contraseña incorrectos')
            }
        } catch (error) {
            seterror('Correo electrónico o contraseña incorrectos')
        }



    }
    const handlerRegistro = async (negocio, usuario) => {
        try {
           const responseEmail = await findByEmail(usuario.email);
           if (responseEmail.data.email === usuario.email) {
            seterrorMail('Ya existe una cuenta con este mail')
            return;
        } 
       } catch (error) {
        negocio.usuarios = [usuario]
            const response = await saveNegocio(negocio);
            handlerLogin(negocio.usuarios[0])
            seterrorMail('')
       }
    }
    
    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        })
    }


    return {
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
}
