import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://gorestaurant-xi.vercel.app/api'
});