import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fastapi2-66r3.onrender.com', // deployed FastAPI backend
});

export default API;
