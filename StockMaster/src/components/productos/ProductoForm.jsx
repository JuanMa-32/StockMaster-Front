import { useContext, useEffect, useState } from "react";
import { AppContext } from './../../context/AppContext';
import { Link } from "react-router-dom";
import { findAllCategoria } from "../../services/ProductoService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { CategoriaModal } from "./CategoriaModal";
import { AuthContext } from './../../auth/context/AuthContext';




export const ProductoForm = ({ id }) => {
    const { addProducto, openModalCategoria, cerrarModalCategoria, addCategoria, categoriaFindAll,
        visibleCategoria, categorias, productoSelected, handlerProductoSelected, errorProducto } = useContext(AppContext)
    const { login } = useContext(AuthContext)

    const [selectedImage, setSelectedImage] = useState(null);
    const [productoForm, setproductoForm] = useState({})



    useEffect(() => {
        if (id) {
            setproductoForm(productoSelected)
        }
    }, [productoSelected])


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setproductoForm({
            ...productoForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addProducto(productoForm, login.idNegocio);
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                {/* <div className="col-8 mb-3 d-flex mx-auto me-2">
                                    <label htmlFor="imageInput" className="photo-upload-label ">
                                        {selectedImage ? (
                                            <img src={selectedImage} alt="Selected" className="selected-image" />
                                        ) : (
                                            <>
                                            <span className="upload-text">Cargar foto </span>
                                           
                                            </>
                                        )}
                                    </label>
                                  
                                    <input
                                        id="imageInput"
                                        type="file"
                                        accept="image/*"
                                        name="imagen"
                                        onChange={handleImageChange}
                                        className="visually-hidden"
                                        disabled
                                    />
                                </div> */}
                                {errorProducto.nombre &&  <p className="text-danger">Completar campo nombre</p>}
                               
                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <input type="text" style={{ borderRadius: '8px', borderColor: errorProducto.nombre ? 'red' : '' }}
                                        className="form-control  mx-auto" id="exampleFormControlInput1"
                                        placeholder="Nombre"
                                        name="nombre"
                                        onChange={onInputChange}
                                        value={productoForm?.nombre}
                                    />
                                </div>
                                {errorProducto.precio &&  <p className="text-danger">Completar campo precio</p>}
                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <input type="number" className="form-control" style={{ borderRadius: '8px', borderColor: errorProducto.precio ? 'red' : '' }}
                                        placeholder="Precio"
                                        aria-label="Amount (to the nearest dollar)"
                                        name="precio"
                                        onChange={onInputChange}
                                        value={productoForm?.precio}
                                    />
                                </div>
                                <h6>Opcionales</h6>
                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <input type="number" className="form-control"
                                        placeholder="Precio de promoción"
                                        aria-label="Amount (to the nearest dollar)"
                                        name="precioPromocion"
                                        onChange={onInputChange}
                                        value={productoForm?.precioPromocion}
                                    />
                                </div>
                                {/* <div className="col-9 mb-4 d-flex mx-auto">

                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Categorias</label>
                                    <select className="form-select" value={productoForm.categoria} name="categoria" id="inputGroupSelect01" onChange={onInputChange}>
                                        <option >Seleccione categoria</option>
                                        {categorias.map(c => (
                                            <option key={c.id} value={c.id}>{c.nombre}</option>
                                        ))}
                                    </select>

                                    <button onClick={() => openModalCategoria()} type="button" className='btn'><FontAwesomeIcon style={{ color: '#63E6BE' }} icon={faPlus} /> </button>

                                </div> */}
                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <input type="text" style={{ borderRadius: '8px' }}
                                        className="form-control  mx-auto" id="exampleFormControlInput1"
                                        placeholder="Nombre de la etiqueta"
                                        name="etiqueta"
                                        onChange={onInputChange}
                                        value={productoForm?.etiqueta} />
                                </div>
                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <textarea className="form-control  mx-auto"
                                        style={{ borderRadius: '8px' }}
                                        placeholder="Descripción"
                                        id="exampleFormControlTextarea1" rows="3"
                                        name="descripcion"
                                        onChange={onInputChange}
                                        value={productoForm?.descripcion} />
                                </div>

                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <input type="number" style={{ borderRadius: '8px' }}
                                        className="form-control  mx-auto" id="exampleFormControlInput1"
                                        placeholder="Costo"
                                        name="costo"
                                        onChange={onInputChange}
                                        value={productoForm?.costo} />
                                </div>
                                <div className="col-9 mb-4 d-flex mx-auto">
                                    <label className="input-group-text" for="inputGroupSelect01">Vender por</label>
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                        onChange={onInputChange}
                                        value={productoForm?.venederPor}
                                        name="venederPor"
                                    >
                                        <option value="Unidad" selected={productoForm?.venederPor === "Unidad"}>
                                            Unidad
                                        </option>
                                        <option
                                            value="Fracción"
                                            selected={productoForm?.venederPor === "Fracción"}
                                        >
                                            Fracción (Kilo, Litro, Metro, etc.)
                                        </option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <h4>Stock</h4>
                                <div className="row">
                                    <div className="col">
                                        <input type="number" className="form-control"
                                            placeholder="Stock actual" aria-label="First name"
                                            name="stockActual"
                                            onChange={onInputChange}
                                            value={productoForm?.stockActual} />
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" placeholder="Stock minimo"
                                            aria-label="Last name"
                                            name="stockMinimo"
                                            onChange={onInputChange}
                                            value={productoForm?.stockMinimo} />
                                    </div>
                                </div>
                                {productoForm.id ?
                                    (<>
                                        <button className="btn mt-3" style={{ background: '#63E6BE', color: 'white' }}
                                            type="submit">Actualizar</button>
                                        <Link to={'/productos'} className="btn mt-3" >Cancelar</Link>
                                    </>) :
                                    (<>
                                        <button className="btn mt-3" style={{ background: '#63E6BE', color: 'white' }}
                                            type="submit">Enviar</button>
                                        <Link to={'/productos'} className="btn mt-3" >Cancelar</Link>
                                    </>)}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
