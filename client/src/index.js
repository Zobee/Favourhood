import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TokenProvider } from './context/AccessTokenProvider'

ReactDOM.render(
  <TokenProvider>
    <App />
  </TokenProvider>,
  document.getElementById('root')
);
