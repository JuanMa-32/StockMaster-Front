import React from 'react'

export const ClienteForm = () => {
   const titulo = 'Registrar Cliente'
  return (
   
    <div>
         <h2>{titulo}</h2>
         <div className="col-md-3">
         <form style={{background:'white',borderRadius:' solid 8px',width:'500px',height:'200px' }}>
            
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control " id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Email</label>
            </div>
            <hr />
            <div className="container">
            <button type="button" className="btn btn-primary"  style={{ background: '#efefef', color: 'black' }}>Cancelar</button>
            <button type="button" className="btn ms-2"  style={{ background: '#5ccc81', color: 'white' }} >Avanzar</button>
            </div>

        </form>
        </div>
    </div>
  )
}
