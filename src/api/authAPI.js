
import { USER_API } from '@/instance/baseInstance';

export const handleUserRegister = async (userData) => {
  const response = await USER_API.post("/register", userData);
  return response.data;
};

export const handleUserLogin = async (userData) => {
  const response = await USER_API.post("/login", userData);
  return response.data;
};

// export const getUserProfile = async (token) => {
  
// };

// export const updateProfile = async (formData) => {

// };