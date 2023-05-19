const counter = document.querySelector('.page-nav__cart-number');
const counters = document.querySelectorAll('.page-nav__cart-number');
import globalState from '../../globalState';

export function initialCartCounter() {
  if (localStorage.getItem('userShoppingListCounter')) {
    // console.log(JSON.parse(localStorage.getItem('userShoppingListCounter')));

    counters.forEach(item => {
      item.textContent = JSON.parse(
        localStorage.getItem('userShoppingListCounter')
      );
      if (JSON.parse(localStorage.getItem('userShoppingListCounter'))) {
        item.classList.remove('visually-hidden');
      }
    });

    // counter.textContent = JSON.parse(
    //   localStorage.getItem('userShoppingListCounter')
    // );
    // if (JSON.parse(localStorage.getItem('userShoppingListCounter'))) {
    //   counter.classList.remove('visually-hidden');
    // }
  }
}

export function initialCartCounterBackup() {
  if (globalState.shoppingList().length) {
    counters.forEach(item => {
      item.textContent = globalState.shoppingList().length;
      item.classList.remove('visually-hidden');
    });
    // counter.textContent = globalState.shoppingList().length;
    // counter.classList.remove('visually-hidden');
  }
}
export function closingCartCounter() {
  counters.forEach(item => {
    item.classList.add('visually-hidden');
  });

  // counter.classList.add('visually-hidden');
}

export function cartCounter() {
  if (!globalState.shoppingList().length) {
    counters.forEach(item => {
      item.textContent = '';
      item.classList.add('visually-hidden');
    });
    // counter.textContent = '';
    // counter.classList.add('visually-hidden');
    return;
  }
  counters.forEach(item => {
    item.textContent = globalState.shoppingList().length;
    item.classList.remove('visually-hidden');
  });

  // counter.textContent = globalState.shoppingList().length;

  // counter.classList.remove('visually-hidden');
}
