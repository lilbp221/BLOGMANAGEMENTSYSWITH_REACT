
// Protected.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const isAuth = token || localStorage.getItem('token');

  if (!isAuth) {
    alert('Please login to continue!!');
    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected;