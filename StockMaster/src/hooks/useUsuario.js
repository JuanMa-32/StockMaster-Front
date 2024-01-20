import React, { useReducer, useState } from 'react';
import { findAll, save } from '../services/UsuarioService';
import { UsuarioReducer } from '../reducers/UsuarioReducer';



export const useUsuario = () => {

    //Estados
    const [visibleForm, setvisibleForm] = useState(false)
    const [usuarios, dispatch] = useReducer(UsuarioReducer, [])


    //funciones
    const handlerOpenForm = () => {
        setvisibleForm(true)
    }
    const handlerCloseForm = () => {
        setvisibleForm(false)
    }
    const handlerAddUsuario = async (usuario) => {
        const response = await save(usuario);
       dispatch({
        type: 'addUsuario',
        payload: response.data
       })
       handlerCloseForm()
    }
    const loadingUsuarios = async () => {
        const response = await findAll();
        dispatch({
            type: 'loadingUsuarios',
            payload: response.data
        })
    }

    return {
        //FUNCIONES
        handlerOpenForm,
        handlerCloseForm,
        handlerAddUsuario,
        loadingUsuarios,
        //VARIABLES
        visibleForm,
        usuarios
    }
}
