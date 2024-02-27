import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';

const userInit = {
    nombre: '',
    email: '',
    password: ''
}

export const FormUser = () => {
    const { handlerCloseForm, handlerAddUsuario } = useContext(AppContext);
    const { login } = useContext(AuthContext)
    const [errorUsuario, seterrorUsuario] = useState('')
    const [usuarioForm, setusuarioForm] = useState(userInit)
    const { nombre, email, password } = usuarioForm;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setusuarioForm({
            ...usuarioForm,
            [name]: value
        })
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (nombre === '' || email === '' || password === '') {
            seterrorUsuario('Completar campos vacios.')
            return
        }
        seterrorUsuario('')
        handlerAddUsuario(usuarioForm, login.idNegocio);
    }

    return (
        <form onSubmit={onSubmit}>
            <p className='text-danger'>{errorUsuario}</p>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"
                    onChange={onInputChange}
                    name='nombre'
                    style={{ borderColor: errorUsuario ? 'red' : '' }}
                    value={nombre} />
                <label htmlFor="floatingPassword">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control "
                    onChange={onInputChange}
                    style={{ borderColor: errorUsuario ? 'red' : '' }}
                    name='email'
                    value={email}
                />
                <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" name='password'
                    value={password}
                    style={{ borderColor: errorUsuario ? 'red' : '' }}
                    onChange={onInputChange} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <hr />
            <button type="button" className="btn" style={{ background: '#efefef', color: 'black' }} onClick={handlerCloseForm}>Cancelar</button>
            <button type="submit" className="btn ms-2" style={{ background: '#63E6BE', color: 'white' }} >Avanzar</button>
        </form>
    )
}
