import { createMarkup } from './createMarkup';
import globalState from '../../globalState';
+console.log(globalState.shoppingList());

const bookCardsArray = globalState.shoppingList();

export function renderCurrentBookCards(bookCardsArray) {
  const container = document.querySelector('.js-shopping-list');
  console.log(bookCardsArray);

  if (bookCardsArray.length) {
    const listMarkup = bookCardsArray
      .map(item => {
        return createMarkup(item);
      })
      .join('');

    container.innerHTML = listMarkup;
  } else {
    container.innerHTML =
      '<div class="plug"><p class="plug__text">This page is empty, add some books and proceed to order.</p><div class="plug__img"></div></div>';
  }
}

// renderCurrentBookCards(bookCardsArray);
