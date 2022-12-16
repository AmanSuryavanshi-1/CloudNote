import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <div className="main">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);

