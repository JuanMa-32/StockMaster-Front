import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

export const FormUser = ({ onAvanzar }) => {
    const { handlerCloseForm } = useContext(AppContext);
    return (
        <form>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control " id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Email</label>
            </div>
            <hr />
            <button type="button" class="btn"  style={{ background: '#efefef', color: 'black' }} onClick={handlerCloseForm}>Cancelar</button>
            <button type="button" class="btn ms-2"  style={{ background: '#5ccc81', color: 'white' }} onClick={onAvanzar}>Avanzar</button>
        </form>
    )
}
