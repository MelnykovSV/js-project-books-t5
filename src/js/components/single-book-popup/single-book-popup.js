// export function onModal()  {
//   const refs = {
//     // openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   // refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// }
import { fetchSingleBook } from '../../api';

const backdrop = document.querySelector('.book-backdrop');
const closeButton = document.querySelector('.modal__close');
const bookPopUpCard = document.querySelector('.book-pop-up__card');

closeButton.addEventListener('click', toggleModal);

function toggleModal() {
  backdrop.classList.toggle('hidden');
}

export async function showSingleBookPopUp(e) {
  if (e.target.classList.contains('books__item')) {
    const { data } = await fetchSingleBook(e.target.dataset.id);
    const markup = createPopUpMarkup(data);
    bookPopUpCard.innerHTML = markup;

    toggleModal();
  }
}

function createPopUpMarkup({
  author,
  title,
  book_image,
  description,
  buy_links,
}) {
  return `
  <div class="thumb">
      <a class="book__link js-link" href="">
        <img class="book__image" src="${book_image}" alt="${title}" loading="lazy" />
      </a>
    </div>
    <div class="book__box">
      <div class="book__info">
        <p class="book__name">${title}</p>
        <p class="book__author">${author}</p>
        <p class="book__description">${description}</p>
      </div>
      <ul class="book__sales--link-list js-sales">
        <li class="book__sales--link">
          <a href="${buy_links[0].url}" target="_blank" rel="noopener noreferrer nofollow">
            <img src="#" alt="Amazon" />
          </a>
        </li>
        <li class="book__sales--link">
          <a href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow">
            <img src="#" alt="Apple Books" />
          </a>
        </li>
        <li class="book__sales--link">
          <a href="${buy_links[4].url}" target="_blank" rel="noopener noreferrer nofollow">
            <img src="#" alt="Bookshop" />
          </a>
        </li>
      </ul>
    </div>
  `;
}

document.addEventListener('click', showSingleBookPopUp);
