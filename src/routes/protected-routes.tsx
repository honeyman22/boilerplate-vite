import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const user = true;
  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
