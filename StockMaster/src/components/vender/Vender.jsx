import React, { useContext, useEffect } from 'react'
import { CarroDeCompras } from './CarroDeCompras'
import { ProductosCard } from './ProductosCard';
import { AppContext } from './../../context/AppContext';

export const Vender = () => {
    const { productos, getProductos } = useContext(AppContext)
    useEffect(() => {
        getProductos()
    }, [])

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
                                    placeholder="Nombre o código"
                                    aria-label="Search"
                                />
                            </form>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="catalogDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="catalogDropdown">
                                    <li><a className="dropdown-item" href="#">Opción 1</a></li>
                                    <li><a className="dropdown-item" href="#">Opción 2</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            {productos.map(p =>
                                <div className="col-3" key={p.id}>
                                    <ProductosCard producto={p} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <CarroDeCompras />
                    </div>
                </div>
            </div>
        </>
    )
}
