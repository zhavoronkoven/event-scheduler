import { useContext } from "react";
import { AuthContext } from "@/context";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context is missing");
  }

  return context;
};

export default useAuth;
