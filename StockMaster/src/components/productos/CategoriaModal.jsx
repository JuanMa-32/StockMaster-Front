import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CategoriaForm } from "./CategoriaForm";

export const CategoriaModal = ()=>{
    const[categoria,setCategoria]=useState({})
    const {addProducto,   openModalCategoria,
        cerrarModalCategoria,addCategoria,
        visibleCategoria,} = useContext(AppContext)
        const cambiarCategoria = ({ target }) => {
            const { name, value } = target;
            setCategoria({
                    ...categoria,
                    [name]: value
                })
        }
        const guardarCategoria=()=>{
            addCategoria(categoria);
            cerrarModalCategoria()
        }
    return (
     <>
   <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={{ display: "block" }} tabIndex="-1">
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className="modal-header">
              <h5 className="modal-title">Añadir Categoria</h5>
              <button type="button" onClick={() => cerrarModalCategoria()} className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className='modal-body'>
              <form >
                <div className="col-9">
                  <label htmlFor="firstName" className="form-label-sm">Nombre Categoria</label>
                  <input type="text" className="form-control form-control-sm" id="firstName"
                    placeholder="" name="nombre" value={categoria.nombre} onChange={cambiarCategoria} />
                </div>

              <hr />
              <button type="button" className="btn" style={{ background: '#efefef', color: 'black' }} onClick={cerrarModalCategoria}>Cancelar</button>
            <button onClick={guardarCategoria} type="button" className="btn ms-2" style={{ background: '#63E6BE', color: 'white' }} >Guardar</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
    );
}