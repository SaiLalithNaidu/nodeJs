import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/auth/user', {
        headers: { 'x-auth-token': token }
      }).then(response => {
        // console.log('Fetched user:', response.data); // Debug log
        setUser(response.data);
        setLoading(false);
      }).catch(error => {
        console.error('Error fetching user:', error.response ? error.response.data : error.message);
        localStorage.removeItem('token');
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      console.log('Attempting to log in with:', { email, password });
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Login response:', response.data); // Debug log
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user); // Ensure response.data.user matches your expected structure
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login'); // Redirect to login page after logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
