import React from 'react'

export const CarroDeCompras = () => {
  return (
    <>
        <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                   
                        <tr >
                            <td>sda</td>
                            <td>sda</td>
                            <td>sdasa</td>
                            <td>asdsaas</td>
                            <td><button
                                className="btn btn-danger"
                                >eliminar</button></td>
                        </tr>

                  
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">21</td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn btn-success">Seguir comprando</button>
    </>
  )
}
