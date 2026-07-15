import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import $ from 'jquery'
import './styles/globals.css'
import './styles/main.scss'
import App from './App.jsx'

// Init Bootstrap tooltips on any element with data-toggle="tooltip"
$(document).on('DOMNodeInserted', () => {
  $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
});
$('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
