import React from 'react';
import ReactDOM from 'react-dom/client';  // Oder 'react-dom' für ältere React-Versionen
import { HelmetProvider } from 'react-helmet-async';
import App from './App';  // Passe den Pfad an
import './index.css';  // Oder den Pfad zu deiner Haupt-CSS-Datei

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
