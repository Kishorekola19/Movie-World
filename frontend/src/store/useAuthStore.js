import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('userInfo')) || null,
  login: async (email, password) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const { data } = await axios.post(`${apiUrl}/api/auth/login`, { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      set({ user: data });
    } catch (error) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else if (error.code === 'ERR_NETWORK' || !error.response) {
        throw new Error('Unable to connect to backend server. Please make sure the backend server is running on http://localhost:5000.');
      } else {
        throw new Error('Login failed. Please try again.');
      }
    }
  },
  register: async (name, email, password) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const { data } = await axios.post(`${apiUrl}/api/auth/register`, { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      set({ user: data });
    } catch (error) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else if (error.code === 'ERR_NETWORK' || !error.response) {
        throw new Error('Unable to connect to backend server. Please make sure the backend server is running on http://localhost:5000.');
      } else {
        throw new Error('Registration failed. Please try again.');
      }
    }
  },
  logout: () => {
    localStorage.removeItem('userInfo');
    set({ user: null });
  }
}));

export default useAuthStore;
