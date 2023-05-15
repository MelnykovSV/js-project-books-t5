import { fetchTopBooks } from '../../api';

import { getBooksByCategory } from '../category-book-Vlada/category';

import { createMarkupAllBooks } from './markupTopBooks';

const categoriesRoot = document.querySelector('.categories-root');
const categoryList = document.querySelector('.categories-links-list');

categoriesRoot.addEventListener('click', bestSellersClickHandler);

export async function getAllTopBooks() {
  categoriesRoot.innerHTML = '';
  categoriesRoot.insertAdjacentHTML(
    'afterbegin',
    `<div class="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>`
  );
  const loader = document.querySelector('.lds-default');
  try {
    const { data } = await fetchTopBooks();
    categoriesRoot.innerHTML = createMarkupAllBooks(data);
  } catch (err) {
    console.log(err);
  } finally {
    loader.classList.add('visually-hidden');
  }
}
getAllTopBooks();

function bestSellersClickHandler(event) {
  console.log(1);
  if (event.target.closest('.books__item')) {
    const currentBook = event.target.closest('.books__item');
    const bookID = currentBook.dataset.id;
    console.log(bookID);
  } else if (event.target.classList.contains('top-books__button')) {
    const currentCategory =
      event.target.closest('.top-books__item').children[0];
    const categoryName = currentCategory.textContent;

    const activeLinkEl = categoryList.querySelector('.active-link');
    activeLinkEl.classList.remove('active-link');

    const attributeValue = categoryName.split(' ').join('');
    const currentLink = document.querySelector(
      `[data-category=${attributeValue}]`
    );
    currentLink.classList.add('active-link');

    getBooksByCategory(categoryName);
  }
}

//  try {
//     const { data } = await fetchTopBooks();
//     categoriesRoot.innerHTML = createMarkupAllBooks(data);
//   }

// function renderBooksCategory(categoryName) {
//   // const currentCategory = event.target.closest('.top-books__item').children[0];
//   // const categoryName = currentCategory.textContent;
//   // console.log(categoryName);

//   const fetchBooks = async () => {
//     try {
//       const books = await fetchCategoryBook(categoryName);
//       console.log(books);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchBooks();
// }
