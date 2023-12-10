import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppContext from '../context/app-context';

export default function PublicRoute({ component: Component, ...rest }) {
  const { isLogin } = useContext(AppContext);

  if (rest.path === '/authentication/confirmation') {
    return (
      <Route
        {...rest}
        element={
          localStorage.getItem('toConfirmUser') ? (
            <Component />
          ) : (
            <Navigate to="/authentication/login" />
          )
        }
      />
    );
  } else {
    return (
      <Route
        {...rest}
        element={isLogin ? <Component /> : <Navigate to="/authentication/login" />}
      />
    );
  }
}
