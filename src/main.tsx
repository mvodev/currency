import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeProvider.tsx'; 
import CurrencyRateAppApp from './CurrencyRateApp.tsx'
import { QueryProvider } from './query/QueryProvider.tsx';
import './index.css';
import './reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <CurrencyRateAppApp />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
)
