import apiClient from './apiClient';

export const authService = {
  login: async (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },

  register: async (userData) => {
    return apiClient.post('/auth/register', userData);
  },

  logout: async () => {
    return apiClient.post('/auth/logout');
  },

  getCurrentUser: async () => {
    return apiClient.get('/auth/me');
  },

  refreshToken: async (refreshToken) => {
    return apiClient.post('/auth/refresh', { refreshToken });
  },

  forgotPassword: async (email) => {
    return apiClient.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token, password) => {
    return apiClient.post('/auth/reset-password', { token, password });
  },

  verifyEmail: async (token) => {
    return apiClient.get(`/auth/verify-email/${token}`);
  },
};

export default authService;

