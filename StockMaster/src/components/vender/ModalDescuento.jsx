import React, { useState } from 'react'

export const ModalDescuento = ({ handlerCloseModalDescuento,aplicarDescuento }) => {
  const [descuento, setdescuento] = useState(0)
  const onInputChange = ({ target }) => {
    setdescuento(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    aplicarDescuento(descuento)
    handlerCloseModalDescuento()
  }
  return (
    <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={{ display: "block" }} tabIndex="-1">
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className="modal-header">
              <h5 className="modal-title">Clientes</h5>
              <button type="button" onClick={() => handlerCloseModalDescuento()} className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className="col-9">
                  <label htmlFor="firstName" className="form-label-sm">Descuento</label>
                  <input type="number" className="form-control form-control-sm" id="firstName"
                    placeholder="" name="numero" value={descuento} onChange={onInputChange} />
                </div>
             
              <hr />
              <button type="button" className="btn" style={{ background: '#efefef', color: 'black' }} onClick={handlerCloseModalDescuento}>Cancelar</button>
            <button type="submit" className="btn ms-2" style={{ background: '#63E6BE', color: 'white' }} >Aplicar descuento</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
