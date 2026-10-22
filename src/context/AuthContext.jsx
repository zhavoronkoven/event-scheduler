import { createContext, useState } from "react";

const TOKEN_KEY = "token";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  const login = (newToken) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  return <AuthContext.Provider value={{ token, isAuthed: !!token, login, logout }}>{children}</AuthContext.Provider>;
};