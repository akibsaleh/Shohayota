import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    setLoggedInUser(null);
    return signOut(auth);
  };

  const profileUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUser(user);
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = { loggedInUser, loading, handleRegistration, handleLogin, logOut, profileUpdate };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
