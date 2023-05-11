import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/',
});

export async function fetchTopBooks() {
  return await instance.get('/books/top-books');
}
