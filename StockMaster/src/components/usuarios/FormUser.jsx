import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const userInit = {
    nombre: '',
    email: '',
    password:''
}

export const FormUser = () => {
    const { handlerCloseForm,handlerAddUsuario } = useContext(AppContext);

    const [usuarioForm, setusuarioForm] = useState(userInit)
    const {nombre,email,password} = usuarioForm;

    const onInputChange = ({ target }) => {
        const {name,value} = target;
        setusuarioForm({
                ...usuarioForm,
                [name]:value
            })
    }
  

    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddUsuario(usuarioForm);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" 
                    onChange={onInputChange}
                    name='nombre'
                    value={nombre} />
                <label for="floatingPassword">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control " 
                    onChange={onInputChange}
                    name='email'
                    value={email}
                />
                <label for="floatingPassword">Email</label>
            </div>
            <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" name='password'
  value={password}
   onChange={onInputChange}/>
  <label for="floatingPassword">Password</label>
</div>
            <hr />
            <button type="button" className="btn" style={{ background: '#efefef', color: 'black' }} onClick={handlerCloseForm}>Cancelar</button>
            <button type="submit" className="btn ms-2" style={{ background: '#5ccc81', color: 'white' }} >Avanzar</button>
        </form>
    )
}
