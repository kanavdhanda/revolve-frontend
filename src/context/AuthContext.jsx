import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:8000/api/login/', { username, password });
    setCurrentUser(response.data);
  };

  const logout = async () => {
    await axios.post('http://localhost:8000/api/logout/');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};