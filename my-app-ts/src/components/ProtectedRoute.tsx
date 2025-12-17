import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  isAuthenticated: boolean;
  children: ReactNode;
}

export default function ProtectedRoute({ isAuthenticated, children }: Props) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}