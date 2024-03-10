import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book1 from './Book1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  <div>
    <center><h1>List of books</h1></center>
<React.StrictMode>
    <h2>Science fiction</h2>
    <Book1/>
    <h2>Historical fiction</h2>
    <Book1/>
    <h2>Geo-graphical fiction</h2>
    <Book1/>
  </React.StrictMode>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
