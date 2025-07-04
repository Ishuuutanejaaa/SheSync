import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/"
        state={{ from: location, errorMessage: 'You need to login first.' }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
