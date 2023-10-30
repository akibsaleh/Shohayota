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
            loader: () => fetch('http://localhost:5000/applications'),
          },
          {
            path: '/dashboard/request/:id',
            element: <RequestDetails />,
            loader: ({ params }) => fetch(`http://localhost:5000/applications/${params.id}`),
          },
          {
            path: '/dashboard/pending',
            element: <Dashboard />,
            loader: () => fetch('http://localhost:5000/applications/pending'),
          },
          {
            path: '/dashboard/approved',
            element: <div>Approved</div>,
          },
        ],
      },
    ],
  },
]);
