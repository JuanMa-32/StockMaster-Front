import { useUsuario } from "../hooks/useUsuario"
import React from 'react';
import { AppContext } from "./AppContext"
import { useProducto } from "../hooks/useProducto";
import { UseCliente } from "../hooks/UseCliente";
import { UseTransaccion } from './../hooks/UseTransaccion';
import { useItemsCarro } from "../hooks/useItemsCarro";
import { useVenta } from "../hooks/useVenta";
import { UseNegocio } from "../hooks/UseNegocio";



export const AppProvider = ({ children }) => {
    const {
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

    } = useUsuario();
    const {
        addCliente,
        todosClientes,
        deleteCliente,
        //VARIABLES
        errorCliente,
        clientes
    } = UseCliente();
    const {
        //FUNCIONES
        getProductos,
        addProducto,
        categoriaFindAll,
        handlerProductoSelected,
        eliminarProducto,
        //VARIABLES
        productos,
        openModalCategoria,
        cerrarModalCategoria,
        visibleCategoria,
        addCategoria,
        categorias,
        productoSelected,
        errorProducto,
        stockInsuficiente,
        calcularStock
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
        //FUNCIONES
        saveConfiguraciones,
        negocioSelected,
        //VARAIBLES
        negocio,

    } = UseNegocio();
    const {
        setVentaCarro,
        ventaFinish,
        modalView,
        handlerOpenModal,
        handlerCloseModal,
        handlerOpenModalDescuento,
        handlerCloseModalDescuento,
        modalDescuento,
        venta,
        hanlderVentaSelected,
        ventaSelected,
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
                handlerUsuarioSelected,
                handlerOpenFormPassword,
                handlerCloseFormPassword,
                cambiarPassword,
                //VARIABLES
                visibleModalPassword,
                visibleForm,
                usuarios,
                usuarioSelected,


                //PRODUCTOS
                //FUNCIONES
                getProductos,
                addProducto,
                categoriaFindAll,
                handlerProductoSelected,
                eliminarProducto,
                //VARIABLES
                productos,
                openModalCategoria,
                cerrarModalCategoria,
                visibleCategoria,
                addCategoria,
                categorias,
                productoSelected,
                errorProducto,
                stockInsuficiente,
                calcularStock,

                //clientes
                addCliente,
                todosClientes,
                deleteCliente,
                //VARIABLES
                clientes,
                errorCliente,

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
                venta,
                hanlderVentaSelected,
                ventaSelected,

                //NEGOCIO
                //FUNCIONES
                saveConfiguraciones,
                negocioSelected,
                //VARAIBLES
                negocio,


            }
        }>
            {children}
        </AppContext.Provider>
    )
}
