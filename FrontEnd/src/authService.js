// src/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Error in register:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error in login:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUser:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export { register, login, getUser };
