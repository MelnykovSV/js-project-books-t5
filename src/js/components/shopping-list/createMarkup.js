import * as icons from './icons';

// export function createMarkup(data) {
//   return data
//     .map(
//       ({ _id, book_image, title, list_name, descriprion, author, buy_links }) =>
//         `<li class="card js-card" data-card-id="${_id}">
//             <div class="card__img-thumb">
//                 <img class="card__img" src="${book_image}" alt="Book cover" />
//             </div>
//             <div
//                 type="button"
//                 class="card__delete-btn js-remove-btn"
//                 data-remove-btn-id="${_id}"
//             >
//                 <img class="delete-btn__icon" src="${icons.dump}" alt="Delete icon" />
//             </div>
//             <div class="card__descr">
//                 <h2 class="card__title">${title}</h2>
//                 <p class="card__subtitle">${list_name}</p>
//                 <p class="card__text">${descriprion}</p>

//                 <div class="author">
//                 <p class="author__name">${author}</p>

//                 <ul class="shops list">
//                     <li class="shop__item shop__item--amazon">
//                     <a
//                         class="shop__link link"
//                         href="${buy_links[0].url}"
//                         aria-label="Amazon"
//                     >
//                         <img
//                         class="shop__icon"
//                         srcset="${icons.amazon} 1x, ${icons.amazon2x} 2x"
//                         src="${icons.amazon}"
//                         alt="Shop icon"
//                     /></a>
//                     </li>

//                     <li class="shop__item shop__item--book">
//                     <a
//                         class="shop__link link"
//                         href="${buy_links[1].url}"
//                         aria-label="Apple books"
//                     >
//                         <img
//                         class="shop__icon"
//                         srcset="${icons.appleBook} 1x, ${icons.appleBook2x} 2x"
//                         src="${icons.appleBook}"
//                         alt="Shop icon"
//                         />
//                     </a>
//                     </li>

//                     <li class="shop__item shop__item--bookshop">
//                     <a
//                         class="shop__link link"
//                         href="${buy_links[4].url}"
//                         aria-label="Bookshop"
//                     >
//                         <img
//                         class="shop__icon"
//                         srcset="${icons.bookshop} 1x, ${icons.bookshop2x} 2x"
//                         src="${icons.bookshop}"
//                         alt="Shop icon"
//                         />
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//         </li>`
//     )
//     .join('');
// }

// export function createMarkup(data) {
//   return data
//     .map(
//       (el, idx) =>
//         `<li class="card js-card" data-card-id="${idx}">
//   <div class="card__img-thumb">
//     <img
//       class="card__img"
//       src="../src/images/shopping-list/test.jpg"
//       alt="Book cover"
//     />
//   </div>
//   <div
//     tabindex="0"
//     type="button"
//     class="card__delete-btn js-remove-btn"
//     data-remove-btn-id="${idx}"
//   >
//     <img class="delete-btn__icon" src="${icons.dump}" alt="Delete icon" />
//   </div>
//   <div class="card__descr">
//     <h2 class="card__title">I will find you</h2>
//     <p class="card__subtitle">Hardcover fiction</p>
//     <p class="card__text">
//       David Burroughs was once a devoted father to his three-year-old son
//       Matthew, living a dream life just a short drive away from the
//       working-class suburb where he and his wife, Cheryl, first fell in
//       love--until one fateful night when David woke suddenly to discover Matthew
//       had been murdered while David was asleep just down the hall.
//     </p>

//     <div class="author">
//       <p class="author__name">Harlan Coben</p>

//       <ul class="shops list">
//         <li class="shop__item shop__item--amazon">
//           <a
//             class="shop__link link"
//             href="https://www.amazon.com/"
//             aria-label="Amazon"
//           >
//             <img
//               class="shop__icon"
//               srcset="${icons.amazon} 1x, ${icons.amazon2x} 2x"
//               src="${icons.amazon}"
//               alt="Shop icon"
//             />
//           </a>
//         </li>

//         <li class="shop__item shop__item--book">
//           <a
//             class="shop__link link"
//             href="https://apps.apple.com/ru/app/apple-books/id364709193"
//             aria-label="Apple books"
//           >
//             <img
//               class="shop__icon"
//               srcset="${icons.appleBook} 1x, ${icons.appleBook2x} 2x"
//               src="${icons.appleBook}"
//               alt="Shop icon"
//             />
//           </a>
//         </li>

//         <li class="shop__item shop__item--bookshop">
//           <a
//             class="shop__link link"
//             href="https://bookshop.org/"
//             aria-label="Bookshop"
//           >
//             <img
//               class="shop__icon"
//               srcset="${icons.bookshop} 1x, ${icons.bookshop2x} 2x"
//               src="${icons.bookshop}"
//               alt="Shop icon"
//             />
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
//             </li>`
//     )
//     .join('');
// }

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
