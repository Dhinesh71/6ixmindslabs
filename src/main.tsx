import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppEnhanced from './AppEnhanced.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppEnhanced />
  </StrictMode>
);
