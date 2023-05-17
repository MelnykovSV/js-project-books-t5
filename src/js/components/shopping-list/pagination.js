import globalState from '../../globalState';
import Pagination from 'tui-pagination';
import { renderCurrentBookCards } from './cart';

let totalBookCards;
let currentPage = 1;
let itemsPerPage;
let visiblePages;
let lastPage;

const query = matchMedia('(max-width: 767px)');

export function initialShoppingList() {
  totalBookCards = globalState.shoppingList().length;

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
}

///resize sentry
query.addEventListener('change', event => {
  if (event.matches) {
    itemsPerPage = 4;
    visiblePages = 2;
    smallResolutionPaginatorHandler();
    renderCurrentBookCards(findCurrentBookCards(1, 4));
    lastPage = Math.ceil(totalBookCards / itemsPerPage);
  } else {
    itemsPerPage = 3;
    visiblePages = 3;
    bigResolutionPaginatorHandler();

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

    renderCurrentBookCards(findCurrentBookCards(currentPage, itemsPerPage));
  }
});

export function findCurrentBookCards(page, itemsPerPage) {
  const currentBookCardsArray = globalState
    .shoppingList()
    .filter((item, index) => {
      return (
        index >= currentPage * itemsPerPage - itemsPerPage &&
        index <= currentPage * itemsPerPage - 1
      );
    });

  if (currentBookCardsArray.length) {
    return currentBookCardsArray;
  }

  currentPage -= 1;
  totalBookCards = globalState.shoppingList().length;

  if (currentPage === 0) {
    document.querySelector('.js-plug')?.classList.remove('visually-hidden');
    return;
  }

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

  return secondTry;
}

function createPaginator({ totalItmes, itemsPerPage, visiblePages, page }) {
  const container = document.querySelector('.paginator-container');
  if (container) {
    if (totalItmes > itemsPerPage) {
      container.classList.remove('visually-hidden');
    }
    const options = {
      usageStatistics: false,
      totalItems: totalItmes,
      itemsPerPage: itemsPerPage,
      visiblePages: visiblePages,
      page: page,
      centerAlign: false,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };

    const instance = new Pagination(container, options);

    instance.on('afterMove', e => {
      currentPage = e.page;

      const currentBookCardsArray = findCurrentBookCards(e.page, itemsPerPage);

      renderCurrentBookCards(currentBookCardsArray);
    });
    if (totalItmes <= itemsPerPage) {
      container.classList.add('visually-hidden');
    }
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
