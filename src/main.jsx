import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './Context/Context.jsx'
import App from './App.jsx'
import './index.css'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
