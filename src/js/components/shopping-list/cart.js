import { createMarkup } from './createMarkup';
import globalState from '../../globalState';
+console.log(globalState.shoppingList());

const bookCardsArray = globalState.shoppingList();

export function renderCurrentBookCards(bookCardsArray) {
  const container = document.querySelector('.js-shopping-list');

  const listMarkup = bookCardsArray
    .map(item => {
      return createMarkup(item);
    })
    .join('');

  container.innerHTML = listMarkup;
}

// renderCurrentBookCards(bookCardsArray);
