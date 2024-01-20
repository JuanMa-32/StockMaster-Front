import { useUsuario } from "../hooks/useUsuario"
import React from 'react';
import { AppContext } from "./AppContext"



export const AppProvider = ({ children }) => {
    const {
        //FUNCIONES
        handlerOpenForm,
        handlerCloseForm,
        handlerAddUsuario,
        loadingUsuarios,
        //VARIABLES
        visibleForm,
        usuarios
    } = useUsuario();
    return (
        <AppContext.Provider value={
            {
                //FUNCIONES
                handlerOpenForm,
                handlerCloseForm,
                handlerAddUsuario,
                loadingUsuarios,
                //VARIABLES
                visibleForm,
                usuarios

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
