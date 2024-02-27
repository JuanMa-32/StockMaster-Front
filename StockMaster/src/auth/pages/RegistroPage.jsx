import React, { useContext, useState } from 'react'
import { AuthContext } from './../context/AuthContext';

export const RegistroPage = () => {
  const { registroInit, handlerRegistro } = useContext(AuthContext);
  const [registro, setregistro] = useState(registroInit)
  const [usuario, setusuario] = useState({})
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setusuario({
      ...usuario,
      [name]: value
    })
    setregistro({
      ...registro,
      usuarios: [usuario]
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
   
    handlerRegistro(registro)
  }

  return (
    <>
      <div className="login-page ">
        <form onSubmit={onSubmit} className="form p-5">
         
          <input
            type="text"

            name='nombre'
            value={usuario?.nombre}
            onChange={onInputChange}
            className="input  mt-3 mt-5"
          />
         
          <input
            type="email"
            id="email"
            name='email'
            value={usuario?.email}
            onChange={onInputChange}
            className="input  mt-3 "
          />

         
          <input
            type="password"
            id="password"
            name='password'
            value={usuario?.password}
            onChange={onInputChange}
            className="input mt-3 mb-5"
          />


          <button type="submit" className="button">
            Registrarse
          </button>
        </form>
      </div>
    </>
  )
}

