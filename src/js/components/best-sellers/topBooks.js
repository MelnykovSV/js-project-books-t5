import { fetchCategoryBook, fetchTopBooks } from '../../api';
import { createMarkupAllBooks } from './markupTopBooks';

const categoriesRoot = document.querySelector('.categories-root');

export async function getAllTopBooks() {
  const { data } = await fetchTopBooks();
  categoriesRoot.insertAdjacentHTML('beforeend', createMarkupAllBooks(data));

  const booksList = document.querySelector('.top-books');
  booksList.addEventListener('click', bestSellersClickHandler);
}
getAllTopBooks();

function bestSellersClickHandler(event) {
  if (event.target.closest('.books__item')) {
    const currentBook = event.target.closest('.books__item');
    const bookID = currentBook.dataset.id;
    console.log(bookID);
  } else if (event.target.classList.contains('top-books__button')) {
    const currentCategory =
      event.target.closest('.top-books__item').children[0];
    const categoryName = currentCategory.textContent;
    // console.log(categoryName);
    renderBooksCategory(categoryName);
  }
}

function renderBooksCategory(categoryName) {
  // const currentCategory = event.target.closest('.top-books__item').children[0];
  // const categoryName = currentCategory.textContent;
  // console.log(categoryName);

  const fetchBooks = async () => {
    try {
      const books = await fetchCategoryBook(categoryName);
      console.log(books);
    } catch (err) {
      console.error(err);
    }
  };

  fetchBooks();
}
