import React, { useState } from 'react';



export const useUsuario = () => {

    //Estados
    const [visibleForm, setvisibleForm] = useState(false)


    //funciones
    const handlerOpenForm = () => {
        setvisibleForm(true)
    }
    const handlerCloseForm = () => {
        setvisibleForm(false)
    }

    return {
        //FUNCIONES
        handlerOpenForm,
        handlerCloseForm,
        //VARIABLES
        visibleForm
    }
}
