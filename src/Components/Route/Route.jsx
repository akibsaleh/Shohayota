import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Layout from '../../Layout';
import Login from '../Login/Login';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <h1>Dashboard</h1>,
      },
    ],
  },
]);
