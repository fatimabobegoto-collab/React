import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './dataDandP.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Greeting name="Leiza" age="18"/>
     <Greeting name="Aziel" age="20"/> */}
  </StrictMode>,
)
