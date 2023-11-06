import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
