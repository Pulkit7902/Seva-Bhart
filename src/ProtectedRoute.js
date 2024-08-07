// src/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error during authentication check:', error);
    return <div>Error occurred during authentication check.</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.emailVerified ? (
          <Component {...props} />
        ) : (
          <Navigate to="/verify-email" />
        )
      }
    />
  );
};

export default ProtectedRoute;
