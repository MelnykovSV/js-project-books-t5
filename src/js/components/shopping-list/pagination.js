import globalState from '../../globalState';
import Pagination from 'tui-pagination';
import { renderCurrentBookCards } from './cart';

let totalBookCards = globalState.shoppingList().length;
// eslint-disable-next-line no-unused-vars
let currentPage = 1;
const options = {
  usageStatistics: false,
  totalItems: totalBookCards,
  itemsPerPage: 3,
  visiblePages: 3,
  page: currentPage,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const container = document.querySelector('.paginator-container');
document.body.addEventListener('click', e => {
  if (e.target.classList.contains('js-shopping-list-delete-button')) {
    globalState.setShoppingList(
      globalState.shoppingList().filter(item => {
        return item._id !== e.target.dataset.cardId;
      })
    );
    options.totalItems = globalState.shoppingList().length;
    options.page = currentPage;
    instance = new Pagination(container, options);

    instance.on('beforeMove', e => {
      const currentBookCardsArray = findCurrentBookCards(e.page);
      renderCurrentBookCards(currentBookCardsArray);
      currentPage = e.page;
      console.log(currentPage);
    });

    renderCurrentBookCards(findCurrentBookCards(currentPage));
    console.log(currentPage);
    console.log(globalState.shoppingList());
  }
});

let instance = new Pagination(container, options);

instance.on('beforeMove', e => {
  const currentBookCardsArray = findCurrentBookCards(e.page);
  renderCurrentBookCards(currentBookCardsArray);
  currentPage = e.page;
  console.log(currentPage);
});

export function findCurrentBookCards(num) {
  const currentBookCardsArray = globalState
    .shoppingList()
    .filter((item, index) => {
      return index >= num && index <= num + 3;
    });

  console.log(currentBookCardsArray);
  return currentBookCardsArray;
}

renderCurrentBookCards(findCurrentBookCards(1));
