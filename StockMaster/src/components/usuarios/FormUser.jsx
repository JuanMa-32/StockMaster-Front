import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';


export const FormUser = () => {
    const { handlerCloseForm } = useContext(AppContext);

    const [nombre, setnombre] = useState('')
    const [email, setemail] = useState('')

    const onNombreChange = ({ target }) => {
        setnombre(target.value)
    }
    const onEmailChange = ({ target }) => {
        setemail(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onGuardarFormulario1(nombre,email)
    }

    return (
        <form onSubmit={onSubmit}>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={onNombreChange} />
                <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control " id="floatingPassword"
                    onChange={onEmailChange}
                />
                <label for="floatingPassword">Email</label>
            </div>
            <hr />
            <button type="button" class="btn" style={{ background: '#efefef', color: 'black' }} >Cancelar</button>
            <button type="submit" class="btn ms-2" style={{ background: '#5ccc81', color: 'white' }} >Avanzar</button>
        </form>
    )
}
