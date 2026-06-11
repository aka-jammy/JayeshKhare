import './fonts.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import NavBar from './components/NavBar.jsx'

import HeroPage from './pages/HeroPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ConnectPage from './pages/ConnectPage.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <ScrollToTopButton />
    <HeroPage />
    <AboutMePage />
    <ProjectsPage />
    <ConnectPage />
  </StrictMode>,
)
