import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

export const FormPermisos = () => {
    const { handlerCloseForm } = useContext(AppContext);
    return (
        <>
        <form>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <hr/>
            <button type="button" class="btn "  style={{ background: '#efefef', color: 'black' }} onClick={handlerCloseForm}>Cancelar</button>
            <button type="button" class="btn ms-2"  style={{ background: '#5ccc81', color: 'white' }} >Avanzar</button>
            </form>
        </>
    )
}
