import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}${import.meta.env.VITE_BASE_API_URI}`
});

export default axiosInstance;