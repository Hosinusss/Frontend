// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:9000';

const apiService = {
    login: (email, password) => {
        return axios.post(`${API_URL}/api/login_check`, { username: email, password });
    },
    getUser: (token) => {
        return axios.get(`${API_URL}/api/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
};

export default apiService;
