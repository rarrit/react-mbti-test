import { getUserProfile } from "@/api/authAPI";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const saveStorage = (key , value) => localStorage.setItem(key, value);
const removeStorage = key => localStorage.removeItem(key);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);
  const [isUserInfo, setIsUserInfo] = useState({});
  const token = localStorage.getItem("accessToken");

  const login = (token) => {
    saveStorage("accessToken", token);
    setIsLogin(true);
  }

  const logout = () => {
    removeStorage("accessToken");
    setIsUserInfo(null);
    setIsLogin(false);    
  }

  useEffect(() => {
    const getProfile = async () => {      
      if(token) {
        const userProfile = await getUserProfile(token, logout);        
        setIsUserInfo(userProfile);      
        setIsLogin(true);
      }      
    }
    getProfile();
  }, [token]);  


  return (
    <AuthContext.Provider value={{
      isLogin,
      login,
      logout,
      isUserInfo,
      setIsUserInfo,
      token
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// 훅의 랜더링 주기
// 컴포넌트 랜더링 주기