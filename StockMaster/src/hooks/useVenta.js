import { useState } from "react"
import { vender } from "../services/TransaccionService"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
const ventaInit = {
    subTotal: 0,
    total: 0,
    metodoPago: '',
    observacion: '',
    descuento: 0,
    idUsuario: 4,
    idCliente: 0,
    items: 0,
    productos: []
}

export const useVenta = () => {
    const [venta, setventa] = useState(ventaInit)
    const [modalView, setmodalView] = useState(false)
    const [modalDescuento, setmodalDescuento] = useState(false)

    const navigate = useNavigate();

    const setVentaCarro = (productos, total, subTotal, descuento, idCliente) => {
        const productosNecesarios = productos.map(producto => ({
            idProducto: producto.product.id,
            precioTotalItem: producto.product.precio * producto.quantity,
            nombreProducto: producto.product.nombre,
            itemsProducto: producto.quantity
        }));
        setventa({
            ...venta,
            productos: productosNecesarios,
            descuento: descuento,
            total: total,
            subTotal: subTotal,
            idCliente: idCliente,
            items: productos.length,
        })
    }
    const ventaFinish = async (venta) => {
        const response = await vender(venta)
        Swal.fire('Venta concluida', '+ ' + venta.total, 'success')
        navigate(`/vender`)
    }
    const handlerOpenModal = () => {
        setmodalView(true)
    }
    const handlerCloseModal = () => {
        setmodalView(false)
    }
    const handlerOpenModalDescuento = () => {
        setmodalDescuento(true)
    }
    const handlerCloseModalDescuento = () => {
        setmodalDescuento(false)
    }

    return {
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


}
