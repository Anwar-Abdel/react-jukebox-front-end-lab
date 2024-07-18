import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/tracks', // Ensure this matches your server URL and route prefix
});

export default api;
