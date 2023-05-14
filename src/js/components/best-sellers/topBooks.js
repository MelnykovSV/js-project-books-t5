import { fetchCategoryBook, fetchTopBooks } from '../../api';
import { createMarkupAllBooks } from './markupTopBooks';

const categoriesRoot = document.querySelector('.categories-root');

export async function getAllTopBooks() {
  const { data } = await fetchTopBooks();
  categoriesRoot.insertAdjacentHTML('beforeend', createMarkupAllBooks(data));

  const bookCards = document.querySelectorAll('.books');
  [...bookCards].map(bookCard =>
    bookCard.addEventListener('click', handlerOpenBookCard)
  );

  const buttonsSeeMore = document.querySelectorAll('.top-books__button');
  [...buttonsSeeMore].map(btnSeeMore =>
    btnSeeMore.addEventListener('click', renderBooksCategory)
  );
}
getAllTopBooks();

function handlerOpenBookCard(event) {
  if (event.target.classList.contains('books')) {
    return;
  }
  const currentBook = event.target.closest('.books__item');
  const bookID = currentBook.dataset.id;
  console.log(bookID);
}

function renderBooksCategory(event) {
  const currentCategory = event.target.closest('.top-books__item').children[0];
  const categoryName = currentCategory.textContent;
  console.log(categoryName);


  const fetchBooks = async() => {
    try{
      const books = await fetchCategoryBook(categoryName);
      console.log(books);
    } catch (err) {
      console.error(err);
    }
  };

  fetchBooks();

}
