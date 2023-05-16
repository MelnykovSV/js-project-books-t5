const counter = document.querySelector('.page-nav__cart-number');
import globalState from '../../globalState';

export function initialCartCounter() {
  if (globalState.shoppingList().length) {
    counter.textContent = globalState.shoppingList().length;
    counter.classList.remove('visually-hidden');
  }
}
export function closingCartCounter() {
  counter.classList.add('visually-hidden');
}

export function cartCounter() {
  if (!globalState.shoppingList().length) {
    counter.textContent = '';
    counter.classList.add('visually-hidden');
    return;
  }

  counter.textContent = globalState.shoppingList().length;
  counter.classList.remove('visually-hidden');
}
