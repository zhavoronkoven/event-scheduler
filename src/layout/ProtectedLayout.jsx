import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks";

const ProtectedLayout = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
