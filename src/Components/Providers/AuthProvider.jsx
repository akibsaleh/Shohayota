import { PropTypes } from 'prop-types';
import { createContext } from 'react';
import auth from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const AuthContext = createContext(null);
  const authInfo = {};
  console.log(auth);
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
