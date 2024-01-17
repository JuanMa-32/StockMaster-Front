import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


export const ClienteForm = () => {
  const titulo = 'Registrar Cliente'
  const estilo = {
    color: 'blue',
    fontSize: '16px',
    // Otros estilos...
  };
  const [phoneNumber1, setPhoneNumber1] = useState('');

  const [phoneNumber2, setPhoneNumber2] = useState('');

  const handleChange1 = (value, country, event) => {
    const countryCode = event.target.getAttribute('data-country-code');
    setPhoneNumber1(`+${countryCode} ${value}`);
};

const handleChange2 = (value, country, event) => {
  const countryCode = event.target.getAttribute('data-country-code');
  setPhoneNumber2(`+${countryCode} ${value}`);
};

  return (

    <div>
    
    <div className="col-md-3">
        <form style={{ background: 'white', borderRadius: '8px', width: '700px', height: '500px', padding: '60px', margin: '40px', position: 'relative' }}>

            <div className="circular-icon mb-5 d-flex align-items-center justify-content-center">
            
             <img src="https://github.com/mdo.png" alt="mdo" width="120" height="120" className="rounded-circle me-4" />
                            
            </div>

            <div className="form-floating mb-5">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ borderColor: 'gray' }} />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px', borderColor: 'gray' }}></textarea>
                <label htmlFor="floatingTextarea2">Observaciones</label>
            </div>
        </form>
    </div>

    
    <div className="col-md-3">
            <form style={{ background: 'white', borderRadius: '8px', width: '700px', height: '500px', padding: '60px', margin: '40px', position: 'relative' }}>
                <h4 className="form-floating mb-3">Contacto</h4>

                <div className="form-floating mb-5">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ borderColor: 'gray' }} />
                    <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="mb-5" style={{  alignItems: 'center' }}>
                    <div className="form-floating mb-5">
                        <PhoneInput
                            placeholder="Número de teléfono"
                            inputStyle={{ width: '560px', height: '60px', marginLeft: '20px' }}  // Ajusta el ancho del input
                            containerStyle={{ display: 'inline-block'  }}  // Ajusta el estilo del contenedor
                            buttonStyle={{ borderLeft: '1px solid #ced4da',  padding: '10px' }}  // Ajusta el estilo del botón y la imagen de la bandera
                            value={phoneNumber1}
                            onChange={(value, country, event) => handleChange1(value, country, event)}
                        />
                    </div>

                    <div>
                        <PhoneInput

                            placeholder="Número de teléfono"
                            inputStyle={{ width: '560px', height: '60px', marginLeft: '20px' }}  // Ajusta el ancho del input
                            containerStyle={{ display: 'inline-block' }}  // Ajusta el estilo del contenedor
                            buttonStyle={{ borderLeft: '1px solid #ced4da',  padding: '10px'  }}  // Ajusta el estilo del botón y la imagen de la bandera
                            value={phoneNumber2}
                            onChange={(value, country, event) => handleChange2(value, country, event)}
                        />
                    </div>
                </div>
            </form>
        </div>

</div>

    
  )
}
