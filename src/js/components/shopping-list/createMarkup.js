import * as icons from './icons';

export function createMarkup(data) {
  return `<li class="card js-card" data-card-id="${data._id}">
  <div class="card__img-thumb">
    <img
      class="card__img"

      src="${data.book_image || icons.bookPlug2x}"
      alt="${data.title || 'No'} book cover"
    />
  </div>
  
    <button type="button" class='card__delete-btn js-shopping-list-delete-button' data-card-id="${
      data._id
    }" aria-label="delete button">
      <svg class="delete-btn__icon" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  

  <div class="card__descr">
    <h2 class="card__title">${data.title || 'No title'}</h2>
    <p class="card__subtitle">${data.list_name || 'No category'}</p>
    <p class="card__text">
    ${data.description || 'No description'}
    </p>

    <div class="author">
      <p class="author__name">${data.author || 'No author name'}</p>

      <ul class="shops list">
        <li class="shop__item shop__item--amazon">
          <a
            class="shop__link link"
            href="${data.amazonUrl || 'https://www.amazon.com/'}"
            aria-label="Amazon"
          >
            <img
              class="shop__icon"
              srcset="${icons.amazon} 1x, ${icons.amazon2x} 2x"
              src="${icons.amazon}"
              alt="Shop icon"
            />
          </a>
        </li>

        <li class="shop__item shop__item--book">
          <a
            class="shop__link link"
            href="${
              data.appleUrl ||
              'https://apps.apple.com/ua/app/apple-books/id364709193'
            }"
            aria-label="Apple books"
          >
            <img
              class="shop__icon"
              srcset="${icons.appleBook} 1x, ${icons.appleBook2x} 2x"
              src="${icons.appleBook}"
              alt="Shop icon"
            />
          </a>
        </li>

        <li class="shop__item shop__item--bookshop">
          <a
            class="shop__link link"
            href="${data.bookShopUrl || 'https://bookshop.org/'}"
            aria-label="Bookshop"
          >
            <img
              class="shop__icon"
              srcset="${icons.bookshop} 1x, ${icons.bookshop2x} 2x"
              src="${icons.bookshop}"
              alt="Shop icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
            </li>`;
}
