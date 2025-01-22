import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

createRootDom(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
