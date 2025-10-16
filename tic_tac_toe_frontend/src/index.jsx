import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// Find the root element and create a React 18 root
const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

// PUBLIC_INTERFACE
// Entry point: Renders the application into the DOM using React.StrictMode.
// This ensures highlighting of potential problems and follows modern best practices.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
