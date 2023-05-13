/* eslint-disable linebreak-style */
import { createMarkupOfCategoryList } from './markupCategotyList';
import { fetchCategoryList } from '../../api';

const categoryList = document.querySelector('.categories-links-list');

async function getCategoryList() {
  const { data } = await fetchCategoryList();
  console.log(data);
  categoryList.insertAdjacentHTML(
    'beforeend',
    createMarkupOfCategoryList(data)
  );
}
getCategoryList();
