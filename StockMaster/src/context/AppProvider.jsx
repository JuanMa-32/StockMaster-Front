import { useUsuario } from "../hooks/useUsuario"
import React from 'react';
import { AppContext } from "./AppContext"
import { useProducto } from "../hooks/useProducto";
import { UseCliente } from "../hooks/UseCliente";
import { UseTransaccion } from './../hooks/UseTransaccion';
import { useItemsCarro } from "../hooks/useItemsCarro";
import { useVenta } from "../hooks/useVenta";



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
        addProducto,
        //VARIABLES
        productos
    } = useProducto();

    const {
        //fUNCIONES
        getTransacciones,
        vender,
        //VARIABLES
        transacciones
    } = UseTransaccion();

    const {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
        restarProducto,

    } = useItemsCarro();
    const {
        setVentaCarro,
        ventaFinish,
        modalView,
        handlerOpenModal,
        handlerCloseModal
    } = useVenta()
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
                addProducto,
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
                vender,
                //VARIABLES
                transacciones,

                //CARRO
                cartItems,
                handlerAddProductCart,
                handlerDeleteProductCart,
                restarProducto,

                //VENTA
                setVentaCarro,
                ventaFinish,
                modalView,
                handlerOpenModal,
                handlerCloseModal

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
