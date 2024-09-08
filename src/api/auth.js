
import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

export const handleUserRegister = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const handleUserLogin = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  
};

export const updateProfile = async (formData) => {

};