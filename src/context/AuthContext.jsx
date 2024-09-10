import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");
const saveStorage = (key , value) => localStorage.setItem(key, value);
const removeStorage = key => localStorage.removeItem(key);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(!!token);
  const [isUserInfo, setIsUserInfo] = useState({});

  const login = (token) => {
    saveStorage("accessToken", token);
    setIsLogin(true);
  }

  const logout = () => {
    removeStorage("accessToken");
    setIsLogin(false);
  }

  return (
    <AuthContext.Provider value={{
      isLogin,
      login,
      logout,
      isUserInfo,
      setIsUserInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// 훅의 랜더링 주기
// 컴포넌트 랜더링 주기