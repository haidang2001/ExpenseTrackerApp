import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      return { success: true };
    } else {
      return { success: false, error: 'Invalid username or password' };
    }
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 