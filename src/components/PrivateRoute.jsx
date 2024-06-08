import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import {Route, Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, path }) => {
  console.log('PrivateRoute');
  const { currentUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!currentUser) {
      navigate('/', { state: { from: location } });
    }
  }, [currentUser, navigate, location]);

  return (
    <Route path={path} element={currentUser ? children : <Navigate to="/" />} />
  );
};

export default PrivateRoute;



PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  path: PropTypes.string.isRequired,
};