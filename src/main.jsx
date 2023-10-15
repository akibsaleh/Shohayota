import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
