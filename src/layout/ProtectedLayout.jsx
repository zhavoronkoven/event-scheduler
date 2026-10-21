import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
