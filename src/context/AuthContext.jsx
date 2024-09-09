import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

const loginUserId = localStorage.getItem("userId");
const loginUserNickname = localStorage.getItem("nickname");

const saveStorage = (key , value) => localStorage.setItem(key, value);
const removeStorage = key => localStorage.removeItem(key);

export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(!!token);
  const [user, setUser] = useState({
    id: loginUserId || null,
    nickname: loginUserNickname || null
  })

  const saveUserInfo = (info) => {
    saveStorage("userId", info.userId);
    saveStorage("userNickname", info.nickname);
    setUser({
      id: info.userId,
      nickname: info.nickname,
    });    
  }

  const login = (token) => {
    saveStorage("accessToken", token);
    setLogin(true);
  }

  const logout = () => {
    removeStorage("accessToken");
    removeStorage("userId");
    removeStorage("userNickname");
    setLogin(false);
  }

  return (
    <AuthContext.Provider value={{
      isLogin,
      user,
      saveUserInfo,
      setLogin,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

