import { Navigate, Route, Routes } from "react-router-dom"


import { useContext } from "react"
import { AuthContext } from './auth/context/AuthContext';
import { LoginPage } from "./auth/pages/LoginPage";
import { Rutas } from "./routers/Rutas";
import { RegistroPage } from "./auth/pages/RegistroPage";

function StockApp() {
const {login} = useContext(AuthContext);
  return (
    <>
      <Routes>
        {
         login.isAuth
         ? (
           <Route path='/*' element={<Rutas />} />
         )
         : <>
             <Route path='/login' element={<LoginPage  />} />
             <Route path='/*' element={<Navigate to="/login" /> } />
             <Route path='/registrarme' element={<RegistroPage></RegistroPage>} ></Route>
         </>
         
        }
      </Routes>

    </>
  )
}

export default StockApp
