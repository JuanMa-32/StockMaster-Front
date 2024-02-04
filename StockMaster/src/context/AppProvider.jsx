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
        openModalCategoria,
        cerrarModalCategoria,
        visibleCategoria,
        addCategoria,
        //VARIABLES
        productos
    } = useProducto();

    const {
        //fUNCIONES
        getTransacciones,
        vender,
        //VARIABLES
        transacciones,
       
    } = UseTransaccion();

    const {
        //FUNCIONES
        restablecerCarro,
        handlerAddProductCart,
        handlerDeleteProductCart,
        restarProducto,
        //VARIABLES
        cartItems,

    } = useItemsCarro();
    const {
        setVentaCarro,
        ventaFinish,
        modalView,
        handlerOpenModal,
        handlerCloseModal,
        handlerOpenModalDescuento,
        handlerCloseModalDescuento,
        modalDescuento,
        venta
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
                openModalCategoria,
                cerrarModalCategoria,
                visibleCategoria,
                addCategoria,
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
                //FUNCIONES
                restablecerCarro,
                handlerAddProductCart,
                handlerDeleteProductCart,
                restarProducto,
                //VARIABLES
                cartItems,


                //VENTA
                setVentaCarro,
                ventaFinish,
                modalView,
                handlerOpenModal,
                handlerCloseModal,
                handlerOpenModalDescuento,
                handlerCloseModalDescuento,
                modalDescuento,
                venta

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
