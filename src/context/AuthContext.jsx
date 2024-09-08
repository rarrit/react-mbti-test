import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");


export const AuthProvider = ({ children }) => {

  const [isLogin, setLogin] = useState(!!token);

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setLogin(true);
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLogin(false);
  }

  return (
    <AuthContext.Provider value={{
      isLogin,
      setLogin,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

