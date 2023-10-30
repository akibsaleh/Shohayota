import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Layout from '../../Layout';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import DashboardLayout from '../Dashboard/DashboardLayout';
import RequestDetails from '../Dashboard/RequestDetails';

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
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: '/dashboard',
            element: (
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            ),
            loader: () => fetch('https://shohahoyta-server.vercel.app/applications'),
          },
          {
            path: '/dashboard/request/:id',
            element: <RequestDetails />,
            loader: ({ params }) => fetch(`https://shohahoyta-server.vercel.app/applications/${params.id}`),
          },
          {
            path: '/dashboard/pending',
            element: <Dashboard />,
            loader: () => fetch('https://shohahoyta-server.vercel.app/pending'),
          },
          {
            path: '/dashboard/approved',
            element: <Dashboard />,
            loader: () => fetch('https://shohahoyta-server.vercel.app/approved'),
          },
        ],
      },
    ],
  },
]);
