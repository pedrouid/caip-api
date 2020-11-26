import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://blockchain-api.xyz',
  timeout: 30000, // 30 secs
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
