import { createContext, useState } from "react";

type AuthContextType = {
  token: string | null;
  isAuthed: boolean;
  login: (newToken: string) => void;
  logout: () => void;
};

const TOKEN_KEY = "token";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));

  const login = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  return <AuthContext.Provider value={{ token, isAuthed: !!token, login, logout }}>{children}</AuthContext.Provider>;
};