import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/index.css"
import "./style/typography.css"
import "./style/button.css"
import "./style/input.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
