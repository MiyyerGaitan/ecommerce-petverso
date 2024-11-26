import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Importa el componente principal

// Renderiza el componente <App /> en el div con id="app" en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);