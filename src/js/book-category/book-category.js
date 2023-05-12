import { fetchTopBooks } from './fetchTopBooks';
import { instance } from '../api';

export async function fetchCategoryBook() {
  return await instance.get('/books/category');
}

export async function getAllTopBooks() {
    const { data } = await fetchTopBooks();
    console.log(data);
}

const buttonClickCategory = document.querySelector('.top-books__button');

buttonClickCategory.addEventListener('click', onClickCategory);

function onClickCategory(books) {
  return books.map(({book_image, title, author, _id}) => 
   ` <li class="section-book__list" data-book-id="${_id}">
    <img class="book-element__icon" src="${book_image}" alt="book ${title}" />
    <h3 class="book-element__title">${title}</h3>
    <p class="book-element__author">${author}</p>
  </li>`
  ) .join('');
}