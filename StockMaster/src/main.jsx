import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StockApp from './StockApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StockApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
