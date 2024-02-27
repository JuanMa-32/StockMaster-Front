import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { AuthContext } from '../../auth/context/AuthContext';


export const ModificarPassword = () => {
    const {   handlerCloseFormPassword,cambiarPassword  } = useContext(AppContext);
const{login} = useContext(AuthContext)
    
    const [password, setpassword] = useState('')
    const [errorUsuario, seterrorUsuario] = useState('')


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setpassword(value)
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if ( password === '') {
            seterrorUsuario('Ingresa una contraseña')
            return
        }
        cambiarPassword(login.idUser,password)
    }

    return (
        <form onSubmit={onSubmit}>
           
          
           <p className='text-danger'>{errorUsuario}</p>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" name='password'
                    value={password}
                    style={{ borderColor: errorUsuario ? 'red' : '' }}
                    onChange={onInputChange} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <hr />
            <button type="button" className="btn" style={{ background: '#efefef', color: 'black' }} onClick={handlerCloseFormPassword}>Cancelar</button>
            <button type="submit" className="btn ms-2" style={{ background: '#63E6BE', color: 'white' }} >Avanzar</button>
        </form>
    )
}
