import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from './contexts/ProductsContext'
import { CartContextProvider } from './contexts/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
