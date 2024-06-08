import React, { useState, useEffect } from 'react';
import axios from 'axios';

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