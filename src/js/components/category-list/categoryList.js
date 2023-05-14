/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { getBooksByCategory } from '../category-book-Vlada/category';

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
  if (event.target.closest('.categories-links-list__item')) {
    const currentCategory = event.target.closest('.category-link');
    const currentCategoryName = currentCategory.textContent;
    getBooksByCategory(currentCategoryName);
  }
}
