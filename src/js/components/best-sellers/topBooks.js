import { fetchTopBooks } from '../../api';

import { getBooksByCategory } from '../category-book-Vlada/category';

import { createMarkupAllBooks } from './markupTopBooks';

const categoriesRoot = document.querySelector('.categories-root');
const categoryList = document.querySelector('.categories-links-list');

categoriesRoot.addEventListener('click', bestSellersClickHandler);

export async function getAllTopBooks() {
  categoriesRoot.innerHTML = '';
  const loader = document.querySelector('.lds-default');
  loader.classList.remove('visually-hidden');

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
  if (event.target.classList.contains('top-books__button')) {
    const currentCategory =
      event.target.closest('.top-books__item').children[0];
    const categoryName = currentCategory.textContent;

    const activeLinkEl = categoryList.querySelector('.active-link');
    activeLinkEl.classList.remove('active-link');

    const currentLink = document.querySelector(
      `[data-category="${categoryName}"]`
    );
    currentLink.classList.add('active-link');

    getBooksByCategory(categoryName);
  }
}
