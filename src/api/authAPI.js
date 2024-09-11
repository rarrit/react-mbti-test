
import { AuthContext } from '@/context/AuthContext';
import { USER_API } from '@/instance/baseInstance';
import { useContext } from 'react';

export const handleUserRegister = async (userData) => {
  const response = await USER_API.post("/register", userData);
  return response.data;
};

export const handleUserLogin = async (userData) => {
  const response = await USER_API.post("/login", userData);
  return response.data;
};

export const getUserProfile = async (token, logout) => {
  if(!token) throw new Error("토큰이 없습니다. 다시 로그인해주세요.");  
  const response = await USER_API.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },        
  }).catch((error) => {
    alert(error.response.data.message);
    logout();
    return;
  });
  return response.data;
};

export const updateProfile = async (formData, token) => {
  if(!token) throw new Error("토큰이 없습니다. 다시 로그인해주세요.")
  const response = await USER_API.patch("/profile", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data;
};
