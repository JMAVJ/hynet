import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
