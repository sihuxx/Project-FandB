import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Setting from './SettingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Setting />
  </StrictMode>,
)
