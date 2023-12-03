import axios from 'axios';

// https://fast-api-x5fr.onrender.com

const api = axios.create({
    baseURL: 'https://fast-api-x5fr.onrender.com'
})

export default api