import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StockApp from './StockApp'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StockApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
