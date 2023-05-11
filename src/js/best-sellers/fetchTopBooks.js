import { instance } from '../api';

export async function fetchTopBooks() {
  return await instance.get('/books/top-books');
}
