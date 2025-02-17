import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AgeCalculator from "./components/AgeCalculator.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AgeCalculator />
    <App />
  </StrictMode>,
)
