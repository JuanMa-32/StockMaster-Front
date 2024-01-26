import { useUsuario } from "../hooks/useUsuario"
import React from 'react';
import { AppContext } from "./AppContext"
import { useProducto } from "../hooks/useProducto";
import { UseCliente } from "../hooks/UseCliente";
import { UseTransaccion } from './../hooks/UseTransaccion';



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
    } = UseCliente();
    const {
        //FUNCIONES
        getProductos,
        //VARIABLES
        productos
    } = useProducto();

    const {
        //fUNCIONES
        getTransacciones,
        //VARIABLES
        transacciones
    } = UseTransaccion();
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
                clientes,

                //TRANSACCIONES
                //fUNCIONES
                getTransacciones,
                //VARIABLES
                transacciones

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
