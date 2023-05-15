import globalState from '../../globalState';
import Pagination from 'tui-pagination';
import { renderCurrentBookCards } from './cart';
import * as icons from './icons';

let totalBookCards = globalState.shoppingList().length;

let currentPage = 1;
let itemsPerPage;
let visiblePages;
let lastPage;

const query = matchMedia('(max-width: 767px)');
const mobile = matchMedia('(max-width: 374px)');

if (query.matches) {
  itemsPerPage = 4;
  visiblePages = 2;
  smallResolutionPaginatorHandler();
  renderCurrentBookCards(findCurrentBookCards(1, itemsPerPage));
} else {
  itemsPerPage = 3;
  visiblePages = 3;
  bigResolutionPaginatorHandler();
  renderCurrentBookCards(findCurrentBookCards(1, itemsPerPage));
}

lastPage = Math.ceil(totalBookCards / itemsPerPage);

///resize sentry
query.addEventListener('change', event => {
  if (event.matches) {
    itemsPerPage = 4;
    visiblePages = 2;
    smallResolutionPaginatorHandler();
    renderCurrentBookCards(findCurrentBookCards(1, 4));
    lastPage = Math.ceil(totalBookCards / itemsPerPage);
    console.log('4');
  } else {
    itemsPerPage = 3;
    visiblePages = 3;
    bigResolutionPaginatorHandler();
    console.log('3');
    renderCurrentBookCards(findCurrentBookCards(1, 3));
    lastPage = Math.ceil(totalBookCards / itemsPerPage);
  }
});

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('js-shopping-list-delete-button')) {
    globalState.setShoppingList(
      globalState.shoppingList().filter(item => {
        return item._id !== e.target.dataset.cardId;
      })
    );
    totalBookCards = globalState.shoppingList().length;

    createPaginator({
      totalItmes: totalBookCards,
      itemsPerPage: itemsPerPage,
      visiblePages: visiblePages,
      page: currentPage,
    });

    console.log('THIS');
    console.log(findCurrentBookCards(currentPage, itemsPerPage));
    renderCurrentBookCards(findCurrentBookCards(currentPage, itemsPerPage));
    console.log(currentPage);
    console.log(globalState.shoppingList());
  }
});

export function findCurrentBookCards(page, itemsPerPage) {
  console.log(`Page number: ${currentPage}`);
  const currentBookCardsArray = globalState
    .shoppingList()
    .filter((item, index) => {
      return (
        index >= currentPage * itemsPerPage - itemsPerPage &&
        index <= currentPage * itemsPerPage - 1
      );
    });

  if (currentBookCardsArray.length) {
    console.log(currentBookCardsArray);
    return currentBookCardsArray;
  }

  currentPage -= 1;
  totalBookCards = globalState.shoppingList().length;
  console.log(`new current page ${currentPage}`);
  if (currentPage === 0) {
    ///show plug
    console.log('show plug');
    return;
  }
  // page -= 1;

  createPaginator({
    totalItmes: totalBookCards,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    page: currentPage,
  });

  const secondTry = globalState.shoppingList().filter((item, index) => {
    return (
      index >= currentPage * itemsPerPage - itemsPerPage &&
      index <= currentPage * itemsPerPage - 1
    );
  });
  console.log(secondTry);
  return secondTry;
}

function createPaginator({ totalItmes, itemsPerPage, visiblePages, page }) {
  const container = document.querySelector('.paginator-container');
  if (totalItmes > itemsPerPage) {
    container.classList.remove('visually-hidden');
  }

  const desktopPaginationOptions = {
    usageStatistics: false,
    totalItems: totalItmes,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    page: page,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="pagination__pages tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="pagination__pages tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        `<svg class="tui-ico-{{type}}"><use href="${icons.arrows}#icon-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        `<svg class="tui-ico-{{type}}"><use href="${icons.arrows}#icon-{{type}}"></use></svg>` +
        '</span>',
      moreButton:
        '<a href="#" class="pagination__pages tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const mobilePaginationOptions = {
    usageStatistics: false,
    totalItems: totalItmes,
    itemsPerPage: itemsPerPage,
    visiblePages: 1,
    page: page,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="pagination__pages tui-page-btn">{{page}}</a>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        `<svg class="tui-ico-{{type}}"><use href="${icons.arrows}#icon-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        `<svg class="tui-ico-{{type}}"><use href="${icons.arrows}#icon-{{type}}"></use></svg>` +
        '</span>',
    },
  };

  if (mobile.matches) {
    createPaginationInstance(container, mobilePaginationOptions);
  } else {
    createPaginationInstance(container, desktopPaginationOptions);
  }

  mobile.addEventListener('change', event => {
    if (event.matches) {
      createPaginationInstance(container, mobilePaginationOptions);
    } else {
      createPaginationInstance(container, desktopPaginationOptions);
    }
  });

  if (totalItmes <= itemsPerPage) {
    container.classList.add('visually-hidden');
  }
}

function smallResolutionPaginatorHandler() {
  createPaginator({
    totalItmes: totalBookCards,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    page: currentPage,
  });
}

function bigResolutionPaginatorHandler() {
  createPaginator({
    totalItmes: totalBookCards,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    page: currentPage,
  });
}

function createPaginationInstance(container, options) {
  const instance = new Pagination(container, options);

  instance.on('afterMove', e => {
    currentPage = e.page;
    console.log(`Moved to page ${currentPage}`);
    const currentBookCardsArray = findCurrentBookCards(e.page, itemsPerPage);

    renderCurrentBookCards(currentBookCardsArray);
  });
}
