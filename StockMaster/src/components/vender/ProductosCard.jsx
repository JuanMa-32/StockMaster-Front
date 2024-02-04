import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { AppContext } from './../../context/AppContext';

export const ProductosCard = ({ producto }) => {
  const { handlerAddProductCart, restarProducto, handlerDeleteProductCart } = useContext(AppContext)
  const [cantidad, setCantidad] = useState(0);

  const handleIncrement = () => {
    setCantidad(cantidad + 1);
    handlerAddProductCart(producto)
  };

  const handleDecrement = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      restarProducto(producto)
    }
  };
  const handleTrashClick = () => {
    setCantidad(0);
    handlerDeleteProductCart(producto.id)
  };
  return (
    <div className="card" >
      <div className="button-container">
        <button className="btn btn-success" onClick={handleIncrement}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {cantidad > 0 && (
          <>
            {cantidad > 1 ? (
              <button className="btn btn-danger" onClick={handleDecrement}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            ) : (
              <button className="btn btn-danger" onClick={handleTrashClick}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
            <span>{cantidad}</span>
          </>
        )}
      </div>
      <img src="/card.png" alt="Nombre del Producto" />
      <div className="card-footer">
        <h5>{producto.nombre}</h5>
        <p>$ {producto.precio}</p>
      </div>
    </div>
  )
}
