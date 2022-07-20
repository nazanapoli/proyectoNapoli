import React from 'react'; //Ya no es necesaria desde la v18 de React.
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
const root = ReactDOM.createRoot(document.getElementById('root')); //Agarra elemento en el que se va a insertar 'App'
root.render(<App />); //Agrega 'App' a 'root'