import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './main.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
