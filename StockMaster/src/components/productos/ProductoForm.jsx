import { useContext, useState } from "react";
import { AppContext } from './../../context/AppContext';


export const ProductoForm = () => {
   const {addProducto} = useContext(AppContext)

    const [selectedImage, setSelectedImage] = useState(null);
    const [productoForm, setproductoForm] = useState({})

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
        addProducto(productoForm);
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            <div className="col-8 mb-3 d-flex mx-auto me-2">
                                <label htmlFor="imageInput" className="photo-upload-label ">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected" className="selected-image" />
                                    ) : (
                                        <span className="upload-text">Cargar foto</span>
                                    )}
                                </label>
                                <input
                                    id="imageInput"
                                    type="file"
                                    accept="image/*"
                                    name="imagen"
                                    onChange={handleImageChange}
                                    className="visually-hidden"
                                />
                            </div>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <input type="text" style={{ borderRadius: '8px' }}
                                    className="form-control  mx-auto" id="exampleFormControlInput1"
                                    placeholder="Nombre"
                                    name="nombre"
                                    onChange={onInputChange}
                                    value={productoForm?.nombre}
                                     />
                            </div>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <input type="number" class="form-control"
                                    placeholder="Precio"
                                    aria-label="Amount (to the nearest dollar)"
                                    name="precio"
                                    onChange={onInputChange}
                                    value={productoForm?.precio}
                                     />
                            </div>
                            <h6>Opcionales</h6>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <input type="number" class="form-control"
                                    placeholder="Precio de promoción"
                                    aria-label="Amount (to the nearest dollar)"
                                    name="precioPromocion"
                                    onChange={onInputChange}
                                    value={productoForm?.precioPromocion} 
                                    />
                            </div>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <label class="input-group-text" for="inputGroupSelect01">Categorias</label>
                                <select class="form-select" id="inputGroupSelect01"  onChange={onInputChange}>
                                    <option selected></option>
                                    <option value="1">aca van las categorias</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <input type="text" style={{ borderRadius: '8px' }}
                                    className="form-control  mx-auto" id="exampleFormControlInput1"
                                    placeholder="Nombre de la etiqueta" 
                                    name="etiqueta"
                                    onChange={onInputChange}
                                    value={productoForm?.etiqueta}/>
                            </div>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <textarea className="form-control  mx-auto"
                                    style={{ borderRadius: '8px' }}
                                    placeholder="Descripción"
                                    id="exampleFormControlTextarea1" rows="3"
                                    name="descripcion"
                                    onChange={onInputChange}
                                    value={productoForm?.descripcion}/>
                            </div>
                           
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <input type="number" style={{ borderRadius: '8px' }}
                                    className="form-control  mx-auto" id="exampleFormControlInput1"
                                    placeholder="Costo"  
                                    name="costo"
                                    onChange={onInputChange}
                                    value={productoForm?.costo}/>
                            </div>
                            <div className="col-9 mb-4 d-flex mx-auto">
                                <label class="input-group-text" for="inputGroupSelect01">Vender por</label>
                                <select class="form-select" id="inputGroupSelect01"  onChange={onInputChange}
                                    value={productoForm?.venderPor}>
                                    <option selected>Unidad</option>
                                    <option value="1">Fracción (Kilo, Litro, Metro, etc.)</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-4 p-4" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            <h4>Stock</h4>
                            <div class="row">
                                <div class="col">
                                    <input type="number" class="form-control" 
                                    placeholder="Stock actual" aria-label="First name"
                                    name="stockActual"
                                    onChange={onInputChange}
                                    value={productoForm?.stockActual} />
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" placeholder="Stock minimo" 
                                    aria-label="Last name" 
                                    name="stockMinimo"
                                    onChange={onInputChange}
                                    value={productoForm?.stockMinimo}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button type="submit">enviar</button>
        </form>
    )
}
