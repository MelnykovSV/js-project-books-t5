import { fetchTopBooks } from '../api';
import { createMarkupAllBooks } from '../best-sellers/markupTopBooks';

const booksList = document.querySelector('.top-books');

export async function getAllTopBooks() {
  const { data } = await fetchTopBooks();
  console.log(data);
  booksList.insertAdjacentHTML('beforeend', createMarkupAllBooks(data));
}
