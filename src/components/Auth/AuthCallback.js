import React from 'react';
import { Redirect, useLocation } from 'react-router';

const AuthCallback = () => {
  const location = useLocation();
  localStorage.setItem('gitmeet-token', location.search.slice(7));
  return <Redirect to="/" />;
};

export default AuthCallback;
