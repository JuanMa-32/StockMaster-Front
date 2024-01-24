import { useState } from "react";


export const ProductoForm = () => {

    const [selectedImage, setSelectedImage] = useState(null);

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
    return (
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
                                onChange={handleImageChange}
                                className="visually-hidden"
                            />
                        </div>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <input type="text" style={{ borderRadius: '8px' }}
                                className="form-control  mx-auto" id="exampleFormControlInput1"
                                placeholder="Nombre" />
                        </div>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span class="input-group-text">.00</span>
                        </div>
                        <h5>Opcionales</h5>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span class="input-group-text">.00</span>
                        </div>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <label class="input-group-text" for="inputGroupSelect01">Categorias</label>
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <input type="text" style={{ borderRadius: '8px' }}
                                className="form-control  mx-auto" id="exampleFormControlInput1"
                                placeholder="Nombre de la etiqueta" />
                        </div>
                        <div className="col-8 d-flex mx-auto">
                            <textarea className="form-control  mx-auto"
                                style={{ borderRadius: '8px' }}
                                placeholder="Descripción"
                                id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-8 mb-3 mt-3 d-flex mx-auto">
                            <input type="text" style={{ borderRadius: '8px' }}
                                className="form-control  mx-auto" id="exampleFormControlInput1"
                                placeholder="Codigo del producto" />
                        </div>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <input type="text" style={{ borderRadius: '8px' }}
                                className="form-control  mx-auto" id="exampleFormControlInput1"
                                placeholder="Costo" />
                        </div>
                        <div className="col-8 mb-3 d-flex mx-auto">
                            <label class="input-group-text" for="inputGroupSelect01">Vender por</label>
                            <select class="form-select" id="inputGroupSelect01">
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
    <input type="number" class="form-control" placeholder="Stock actual" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="number" class="form-control" placeholder="Stock minimo" aria-label="Last name"/>
  </div>
</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
