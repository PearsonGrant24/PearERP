import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./common/theme/index.css";
//import App from './App.tsx'
import MainLayout from './common/layouts/MainLayout/MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <MainLayout/>
  </StrictMode>,
)
