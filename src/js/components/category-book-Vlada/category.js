import { fetchBooksByCategory } from '../../api';

const categoriesRoot = document.querySelector('.categories-root');

export async function getBooksByCategory(category) {
  categoriesRoot.innerHTML = '';
  const loader = document.querySelector('.lds-default');
  loader.classList.remove('visually-hidden');
  try {
    const { data } = await fetchBooksByCategory(category);
    categoriesRoot.innerHTML = markupBooksByCategory(data, category);
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add('visually-hidden');
  }
}

function markupBooksByCategory(data, category) {
  const arrCategory = category.split(' ');
  const categorySpan = [...arrCategory]
    .splice(arrCategory.length - 1, 1)
    .join(' ');
  const categoryTitle = [...arrCategory]
    .splice(0, arrCategory.length - 1)
    .join(' ');
  return `<h2 class="home-title">${categoryTitle} <span class="home-title__accent">${categorySpan}</span></h2> 
  <ul class="category list">${data
    .map(
      ({ book_image, title, author, _id }) => `
   <li class="category__item list" data-id="${_id}">
    <div class="category__overlay">
    <img class="category__image" src="${book_image}" alt="book ${title}" />
    <p class="category__text--overlay">Quick view</p>
    </div>
    <div class="category__info">
    <h4 class="category__title">${title || 'Not found'}</h4>
    <p class="category__text">${author || 'Not found'}</p>
    </div>
  </li>`
    )
    .join('')}`;
}
