import { useState } from "react"
const ventaInit = {
    subTotal: 0,
    total: 0,
    metodoPago: '',
    observacion: '',
    idUsuario: 0,
    idCliente: 0,
    items: 0,
    productos: []
}

export const useVenta = () => {
    const [venta, setventa] = useState(ventaInit)
    const [modalView, setmodalView] = useState(false)

    const setVentaCarro = (productos, total, subTotal, idCliente, items) => {
        setventa({
            ...venta,
            productos: productos,
            total: total,
            subTotal: subTotal,
            idCliente: idCliente,
            items: productos.length,
        })
    }
    const ventaFinish = (metodoPago,observacion) => {
        setventa({
            ...venta,
            metodoPago:metodoPago,
            observacion:observacion
        })
    }
    const handlerOpenModal = () => {
        setmodalView(true)
    }
    const handlerCloseModal = () => {
        setmodalView(false)
    }

    return {
        setVentaCarro,
        ventaFinish,
        modalView,
        handlerOpenModal,
        handlerCloseModal
    }


}
