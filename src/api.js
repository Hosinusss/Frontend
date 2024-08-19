import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/login_check', // Adjust the base URL to your API endpoint
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Adjust if you're storing the token differently
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;
