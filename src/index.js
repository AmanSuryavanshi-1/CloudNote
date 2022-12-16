import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
// import background from "./bg1.png";

let myStyle = {
//  backgroundImage: `url(${background})` 
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <div className="main">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);

