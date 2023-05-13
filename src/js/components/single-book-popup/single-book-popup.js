// import { remove } from 'toastr';
import { fetchSingleBook } from '../../api';

const imageAmazon = new URL(
  '../../../images/single-book/amazon.png',
  import.meta.url
);
const imageAmazon2x = new URL(
  '../../../images/single-book/amazon@2x.png',
  import.meta.url
);
const imageAppleBook = new URL(
  '../../../images/single-book/apple-book.png',
  import.meta.url
);
const imageAppleBook2x = new URL(
  '../../../images/single-book/apple-book@2x.png',
  import.meta.url
);
const imageBookShop = new URL(
  '../../../images/single-book/book-shop.png',
  import.meta.url
);
const imageBookShop2x = new URL(
  '../../../images/single-book/book-shop@2x.png',
  import.meta.url
);
const rootElement = document.querySelector('.categories-root');
const backdrop = document.querySelector('.book-backdrop');
const closeButton = document.querySelector('.modal__close');
const bookPopUpCard = document.querySelector('.book-pop-up__card');

closeButton.addEventListener('click', () => {
  backdrop.classList.add('hidden');
});

function closeModal(e) {
  if (e.code === 'Escape' || e.target.classList.contains('book-backdrop')) {
    document.removeEventListener('keydown', closeModal);
    backdrop.removeEventListener('click', closeModal);
    console.log('1234');
    backdrop.classList.add('hidden');
  }
}

export async function showSingleBookPopUp(e) {
  if (e.target.classList.contains('books__item')) {
    const { data } = await fetchSingleBook(e.target.dataset.id);
    const markup = createPopUpMarkup(data);
    bookPopUpCard.innerHTML = markup;
    document.addEventListener('keydown', closeModal);
    backdrop.addEventListener('click', closeModal);

    backdrop.classList.remove('hidden');
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
        <p class="book__description">${
          description || 'Sorry, book`s description not found'
        }
        </p>
      </div>
      <ul class="book__sales--link-list js-sales">
        <li class="book__sales--link">
          <a href="${
            buy_links[0].url
          }" target="_blank" rel="noopener noreferrer nofollow">
            <img srcset="${imageAmazon} 1x, ${imageAmazon2x} 2x" src="${imageAmazon}" alt="Amazon" />
          </a>
        </li>
        <li class="book__sales--link">
          <a href="${
            buy_links[1].url
          }" target="_blank" rel="noopener noreferrer nofollow">
            <img srcset="${imageAppleBook} 1x, ${imageAppleBook2x} 2x" src="${imageAppleBook}" alt="Apple Books" />
          </a>
        </li>
        <li class="book__sales--link">
          <a href="${
            buy_links[4].url
          }" target="_blank" rel="noopener noreferrer nofollow">
            <img srcset="${imageBookShop} 1x, ${imageBookShop2x} 2x" src="${imageBookShop}" alt="Bookshop" />
          </a>
        </li>
      </ul>
    </div>
  `;
}

rootElement.addEventListener('click', showSingleBookPopUp);
