import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Project } from './Project.tsx'
import {} from "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Project />
  </StrictMode>,
)
