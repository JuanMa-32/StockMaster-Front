import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ModalAviso = ({ handleClose }) => {

  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog" >
        <div className="modal-content" style={{ backgroundColor: '#f2f5d2' }}>
          <div className="modal-header">
            <h5 className="modal-title">
              <FontAwesomeIcon icon={faTriangleExclamation} size="2xl" style={{ color: "#FFD43B", marginRight: '5px' }} />
              En desarrollo
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <p>¡Estamos trabajando en ello!</p>
          </div>
        </div>
      </div>
    </div>

  )
}
