import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Components/Providers/AuthProvider';
import { route } from './Components/Route/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <RouterProvider router={route}></RouterProvider>
      </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>
);
