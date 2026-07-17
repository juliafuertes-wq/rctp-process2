import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import $ from 'jquery'
import 'bootstrap'
import './styles/globals.css'
import './styles/main.scss'
import App from './App.jsx'

// Init Bootstrap tooltips — re-run after every React render via MutationObserver
const initTooltips = () => $('[data-toggle="tooltip"]:not([data-bs-original-title])').tooltip({ boundary: 'window' });
const observer = new MutationObserver(initTooltips);
observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
