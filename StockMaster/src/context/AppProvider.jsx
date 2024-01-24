import { useUsuario } from "../hooks/useUsuario"
import React from 'react';
import { AppContext } from "./AppContext"
import { useProducto } from "../hooks/useProducto";
import { UseCliente } from "../hooks/UseCliente";



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
    const {
        addCliente,
        todosClientes,
        //VARIABLES
       
        clientes
    }= UseCliente();
    const {
        //FUNCIONES
        getProductos,
        //VARIABLES
        productos
    } = useProducto();
    return (
        <AppContext.Provider value={
            {
                //USUARIO
                //FUNCIONES
                handlerOpenForm,
                handlerCloseForm,
                handlerAddUsuario,
                loadingUsuarios,
                //VARIABLES
                visibleForm,
                usuarios,

                //PRODUCTOS
                //FUNCIONES
                getProductos,
                //VARIABLES
                productos,
                //clientes
                addCliente,
                todosClientes,
                //VARIABLES
               
                clientes

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
