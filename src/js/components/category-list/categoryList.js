/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { getBooksByCategory } from '../category-book-Vlada/category';
import { getAllTopBooks } from '../best-sellers/topBooks';

import { createMarkupOfCategoryList } from './markupCategotyList';
import { fetchCategoryList } from '../../api';

const categoryList = document.querySelector('.categories-links-list');

async function getCategoryList() {
  const { data } = await fetchCategoryList();
  categoryList.insertAdjacentHTML(
    'beforeend',
    createMarkupOfCategoryList(data)
  );
}
getCategoryList();

categoryList.addEventListener('click', handlerCategoryBooks);

function handlerCategoryBooks(event) {
  if (
    event.target.classList.contains('js-all-category') &&
    !event.target.classList.contains('active-link')
  ) {
    const activeLinkEl = categoryList.querySelector('.active-link');
    activeLinkEl.classList.remove('active-link');

    event.target.classList.add('active-link');

    getAllTopBooks();
    return;
  }

  if (
    event.target.classList.contains('category-link') &&
    !event.target.classList.contains('active-link')
  ) {
    const activeLinkEl = categoryList.querySelector('.active-link');
    activeLinkEl.classList.remove('active-link');

    event.target.classList.add('active-link');
    const currentCategory = event.target;
    const currentCategoryName = currentCategory.textContent;
    getBooksByCategory(currentCategoryName);
  }
}
