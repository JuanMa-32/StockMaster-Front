import { useState } from "react"
import { findByIdVenta, vender } from "../services/TransaccionService"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
const ventaInit = {
    subTotal: 0,
    total: 0,
    metodoPago: '',
    observacion: '',
    descuento: 0,
    idUsuario: 0,
    idCliente: 0,
    items: 0,
    productos: []
}

export const useVenta = () => {
    const [venta, setventa] = useState(ventaInit)
    const [modalView, setmodalView] = useState(false)
    const [modalDescuento, setmodalDescuento] = useState(false)
    const [ventaSelected, setventaSelected] = useState({})

    const navigate = useNavigate();
    const calculateTotalItem = (producto) => {
        const precioUnitario = producto.product.precioPromocion ? producto.product.precioPromocion : producto.product.precio;
        return precioUnitario * producto.quantity;
    }


    const setVentaCarro = (productos, total, subTotal, descuento, idCliente, idUser) => {
        const productosNecesarios = productos.map(producto => ({
            idProducto: producto.product.id,
            precioTotalItem: calculateTotalItem(producto),
            nombreProducto: producto.product.nombre,
            itemsProducto: producto.quantity,
        }));
        setventa({
            ...venta,
            productos: productosNecesarios,
            descuento: descuento,
            total: total,
            subTotal: subTotal,
            idCliente: idCliente,
            items: productos.length,
            idUsuario: idUser
        })
    }
    const ventaFinish = async (venta, idNegocio) => {
        const response = await vender(venta, idNegocio)
        Swal.fire({
            title: '¡Venta Concluida!',
            html: `La venta se ha registrado exitosamente.<br>Total: $${venta.total}`,
            icon: 'success'
        });

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
    const hanlderVentaSelected = async (id) => {
        const response = await findByIdVenta(id);
        setventaSelected(response.data)
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
        venta,
        hanlderVentaSelected,
        ventaSelected,
    }


}
