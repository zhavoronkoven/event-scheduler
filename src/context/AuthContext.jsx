import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = () => {};

  const login = () => {};

  const logout = () => {};

  const value = { user, register, login, logout };
  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};
