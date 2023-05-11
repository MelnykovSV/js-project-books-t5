import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/',
});
