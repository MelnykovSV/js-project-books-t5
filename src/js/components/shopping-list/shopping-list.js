import { refs } from './refs';
// import { createMarkup } from './createMarkup';
import globalState from '../../globalState';
import { data } from './pagination';

// const data = globalState.get().shoppingList;
// console.log(data);

refs.shoppingList.addEventListener('click', onRemoveBtnClick);

function onRemoveBtnClick(e) {
  const removeBtn = e.target.closest('.js-remove-btn');
  const card = e.target.closest('.js-card');

  if (!removeBtn) {
    return;
  }
  const cardId = card.dataset.cardId;
  const removeBtnId = removeBtn.dataset.removeBtnId;

  if (cardId === removeBtnId) {
    const idxItemToDelete = data.findIndex(el => el.id === removeBtnId);

    data.splice(idxItemToDelete, 1);

    card.remove();

    hidePlugAndPagination();

    console.log(data);

    globalState.setShoppingList(data);
  }
}

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
