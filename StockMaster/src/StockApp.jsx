import { Route, Routes } from "react-router-dom"

import { Rutas } from "./routers/rutas"

function StockApp() {
  

  return (
    <>
   
    
      <Routes>
        {
              
                  
                      <Route path='/*' element={<Rutas />} />
                      
            }
      </Routes>
   
    </>
  )
}

export default StockApp
