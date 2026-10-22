import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks";

const ProtectedLayout = () => {
  const { isAuthed } = useAuth();

  return isAuthed ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
