import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

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