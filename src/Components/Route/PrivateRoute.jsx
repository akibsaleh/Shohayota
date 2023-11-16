import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import BootstrapCardDataTable from '../ContentLoader/BootstrapCardDataTable';

const PrivateRoute = ({ children }) => {
  const { loggedInUser, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <BootstrapCardDataTable />
      </div>
    );
  }

  if(loggedInUser?.email) return children;

  if (!loggedInUser) return <Navigate to="/login" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
