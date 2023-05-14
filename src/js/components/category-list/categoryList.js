/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { createMarkupOfCategoryList } from './markupCategotyList';
import { fetchCategoryList } from '../../api';

import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

const categoryList = document.querySelector('.categories-links-list');

async function getCategoryList() {
  const { data } = await fetchCategoryList();
  categoryList.insertAdjacentHTML(
    'beforeend',
    createMarkupOfCategoryList(data)
  );
}
getCategoryList();
