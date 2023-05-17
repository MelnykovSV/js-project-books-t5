import * as icons from './icons';

export function createMarkup(data) {
  return `<li class="card js-card" data-card-id="${data._id}">
  <div class="card__img-thumb">
    <img
      class="card__img"
      src="${data.book_image}"
      alt="${data.title} book cover"
    />
  </div>
  <div
    tabindex="0"
    type="button"
    class="card__delete-btn js-remove-btn"
    data-remove-btn-id="${data._id}"
  >
  <button type="button" class='js-shopping-list-delete-button' data-card-id="${data._id}" aria-label="delete button">
  <span class="delete-btn__icon"></span>
</button>
    
  </div>
  <div class="card__descr">
    <h2 class="card__title">${data.title}</h2>
    <p class="card__subtitle">${data.list_name}</p>
    <p class="card__text">
    ${data.description}
    </p>

    <div class="author">
      <p class="author__name">${data.author}</p>

      <ul class="shops list">
        <li class="shop__item shop__item--amazon">
          <a
            class="shop__link link"
            href="${data.amazonUrl}"
            target="_blank"
          rel="noreferrer noopener"
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
            href="${data.appleUrl}"
            target="_blank"
          rel="noreferrer noopener"
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
            href="${data.bookShopUrl}"
            target="_blank"
          rel="noreferrer noopener"
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
