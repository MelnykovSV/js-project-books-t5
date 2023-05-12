import { fetchTopBooks } from '../../api';
import { createMarkupAllBooks } from './markupTopBooks';

const categoriesRoot = document.querySelector('.categories-root');

export async function getAllTopBooks() {
  const { data } = await fetchTopBooks();
  console.log(data);
  categoriesRoot.insertAdjacentHTML('beforeend', createMarkupAllBooks(data));
}
getAllTopBooks();
