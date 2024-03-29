import React, { useContext, useEffect, useState } from 'react'
import { CarroDeCompras } from './CarroDeCompras'
import { ProductosCard } from './ProductosCard';
import { AppContext } from './../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Vender = () => {
    const { productos, getProductos, cartItems, categorias, categoriaFindAll } = useContext(AppContext)
    const { login } = useContext(AuthContext)
    const [buscar, setbuscar] = useState('')
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    useEffect(() => {
        getProductos(login.idNegocio)
        categoriaFindAll()
    }, [])

    const onInputChange = ({ target }) => {
        setbuscar(target.value)
    }
    const onCategorySelect = (categoryId) => {
        setCategoriaSeleccionada(categoryId);
    };
    let filteredProductos;
    if (buscar === '') {
        filteredProductos = productos
    } else if(productos.length >0) {
        filteredProductos = productos?.filter(
            (producto) =>
                producto?.nombre.toLowerCase().includes(buscar.toLowerCase()) &&
                (categoriaSeleccionada === '' || producto?.categoria?.id === categoriaSeleccionada)
        );
    }

    return (
        <>
            <div >
                <div className="row">
                    <div className="col-md-8">
                        <div className="d-flex align-items-center justify-content-between mb-3" style={{ background: 'white', width: '100%', padding: '10px', borderRadius: '10px' }}>
                            <form className="d-flex" style={{ width: '50%' }}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Nombre "
                                    aria-label="Search"
                                    onChange={onInputChange}
                                    value={buscar}
                                />
                            </form>
                            {/* <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="catalogDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="catalogDropdown">
                                    {categorias.map((c) => (
                                        <li key={c.id}>
                                            <button className='btn' onClick={() => onCategorySelect(c.id)}>{c.nombre}</button>
                                        </li>
                                    ))}

                                </ul>
                            </div> */}
                        </div>
                        {filteredProductos?.length > 0 ? (<div className="row">
                            {filteredProductos?.map(p =>
                                <div className="col-3" key={p.id}>
                                    <ProductosCard producto={p} />
                                </div>
                            )}
                            <div className="col-3">
                                <Link className="card" style={{ backgroundColor: '#63E6BE',height:'100%' }} to={'/producto/create'}>
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <button className="btn  btn-block btn-lg" style={{ color: 'white' }} >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>) : (
                            <div className="col-3"> 
                              <Link className="card" style={{ backgroundColor: '#63E6BE',height:'100%' }} to={'/producto/create'}> 
                                <div className="card-body d-flex justify-content-center align-items-center">
                                  <button className="btn btn-block btn-lg" style={{ color: 'white' }}>
                                    <FontAwesomeIcon icon={faPlus} />
                                  </button>
                                </div>
                              </Link>
                            </div>
                            )}

                    </div>
                    <div className="col-3 " style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minHeight: '85vh',marginLeft:'15px' }}>
                        {cartItems.length > 0 ?
                            (<CarroDeCompras />) :
                            (<div className="d-flex align-items-center justify-content-center " style={{ height: '100%' }}>
                                <div>
                                    <h4>Tu carrito está vacío</h4>
                                    <p>Cliclea en los artículos para añadirlos a la venta.</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
