import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inventario from './Components/Inventario.jsx'
import Logo from './Components/Logo.jsx'
import Boton from './Components/Boton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inventario /> 
    <Logo /> 
    <Boton />
  </StrictMode>,
)
