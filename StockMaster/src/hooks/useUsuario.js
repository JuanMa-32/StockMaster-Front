import React, { useReducer, useState } from 'react';
import { findAll, findByIdUsuario, save, updatePassword } from '../services/UsuarioService';
import { UsuarioReducer } from '../reducers/UsuarioReducer';
import Swal from 'sweetalert2';



export const useUsuario = () => {

    //Estados
    const [visibleForm, setvisibleForm] = useState(false)
    const [visibleModalPassword, setvisibleModalPassword] = useState(false)
    const [usuarios, dispatch] = useReducer(UsuarioReducer, [])
    const [usuarioSelected, setusuarioSelected] = useState({})
   

const handlerUsuarioSelected = async (id) => {
    const response = await findByIdUsuario(id)
    setusuarioSelected(response.data)
}

    //funciones
    const handlerOpenForm = () => {
        setvisibleForm(true)
    }
    const handlerCloseForm = () => {
        setvisibleForm(false)
    }
    const handlerOpenFormPassword = () => {
        setvisibleModalPassword(true)
    }
   
    const handlerCloseFormPassword = () => {
        setvisibleModalPassword(false)
    }
    const cambiarPassword = async (id,password) => {
       
        try {
            await updatePassword(id,password);
            handlerCloseFormPassword()
            Swal.fire('Actualizada','Tu contraseña fue actualizada con exito.','success')
        } catch (error) {
            console.log(error);
        }
    }
    const handlerAddUsuario = async (usuario,idNegocio) => {
        try {        
            const response = await save(usuario,idNegocio);
           dispatch({
            type: 'addUsuario',
            payload: response.data
           })
           handlerCloseForm()
        } catch (error) {
           console.log(error);
        }
    }
    const loadingUsuarios = async (idNegocio) => {
        const response = await findAll(idNegocio);
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
        handlerUsuarioSelected,
        handlerOpenFormPassword,
        handlerCloseFormPassword,
        cambiarPassword,
        //VARIABLES
        visibleModalPassword,
        visibleForm,
        usuarios,
        usuarioSelected,
        
    }
}
