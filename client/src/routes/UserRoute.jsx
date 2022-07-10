import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  return (
    <>
      {loading === false ? (
        isAuthenticated && user.role === 'user' ? (
          children
        ) : (
          <Navigate to="/login" />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default UserRoute;
