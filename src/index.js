import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Neu: Importiere App (das fehlte!)
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);