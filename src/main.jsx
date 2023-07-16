import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProviderLayer from './views/ProviderLayer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderLayer />
    </BrowserRouter>
  </React.StrictMode>,
)
