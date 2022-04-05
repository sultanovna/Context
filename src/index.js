import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/Contex';

const app = (
  <ContextProvider>
  <App />
  </ContextProvider>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)


reportWebVitals();
