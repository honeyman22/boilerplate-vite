import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  logged,
}: {
  children: React.ReactNode;
  logged?: boolean;
}) => {
  if (!logged) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
  //   return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
