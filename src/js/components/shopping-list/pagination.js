// import $ from '../../../../node_modules/jquery';
// import simplePagination from '../../simplePagination/jquery.simplePagination';
import { refs } from './refs';
import { createMarkup } from './createMarkup';

export const data = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
  { a: 4 },
  { a: 5 },
  { a: 6 },
  { a: 7 },
  { a: 8 },
  { a: 9 },
  { a: 10 },
  { a: 11 },
];

class Pagination {
  constructor(itemsPerPage = 5) {
    this.itemsPerPage = itemsPerPage;
  }

  page = 1;

  set(newPage) {
    this.page = newPage;
  }
}

const pagination = new Pagination(4);

let startIndex = 0;
let activePageBtn = document.querySelector('.pagination__btn--active');

renderShoppingListPage();
refs.pagination.classList.remove('is-hidden'); // Убрать после проверок

refs.pagination.addEventListener('click', onPaginationBtnClick);

function hidePlugAndPagination() {
  if (data.length) {
    refs.plug.classList.add('is-hidden');
  } else {
    refs.plug.classList.remove('is-hidden');
  }

  if (data.length > 4) {
    refs.pagination.classList.remove('is-hidden');
  } else {
    refs.pagination.classList.add('is-hidden');
  }
}

function onPaginationBtnClick(e) {
  const btn = e.target.closest('button');

  const isFirstPage = pagination.page === 1;
  const isLastPage = pagination.page === data.length / pagination.itemsPerPage;

  console.log(isFirstPage);
  console.log(isLastPage);

  if (isFirstPage) {
    refs.firstArrow.disabled = true;
    refs.prevArrow.disabled = true;
  } else {
    refs.firstArrow.disabled = false;
    refs.prevArrow.disabled = false;
  }

  if (isLastPage) {
    refs.nextArrow.disabled = true;
    refs.lastArrow.disabled = true;
  } else {
    refs.nextArrow.disabled = false;
    refs.lastArrow.disabled = false;
  }

  switch (btn.value) {
    case 'first':
      pagination.page = 1;
      console.log(pagination.page);
      break;
    case 'prev':
      pagination.page -= 1;
      console.log(pagination.page);

      break;
    case 'next':
      pagination.page += 1;
      console.log(pagination.page);

      break;
    case 'last':
      pagination.page = Math.ceil(data.length / pagination.itemsPerPage);
      console.log(pagination.page);

      break;

    default:
      pagination.page = 1;
  }

  pagination.page = Number(btn.value);
  startIndex =
    pagination.itemsPerPage * pagination.page - pagination.itemsPerPage;

  if (activePageBtn) {
    activePageBtn.classList.remove('pagination__btn--active');
  }

  if (btn.classList.contains('pagination__btn-page')) {
    btn.classList.add('pagination__btn--active');
  }

  activePageBtn = btn;

  renderShoppingListPage();
}

function renderShoppingListPage() {
  if (!data.length) {
    return;
  }

  const itemsToRender = data.slice(
    startIndex,
    pagination.itemsPerPage * pagination.page
  );

  const markup = createMarkup(itemsToRender);

  hidePlugAndPagination();

  refs.shoppingList.innerHTML = markup;
}
