import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeProvider.tsx'; 
import './index.css';
import './reset.css';
import WeatherApp from './WeatherApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <WeatherApp />
    </ThemeProvider>
  </StrictMode>,
)
