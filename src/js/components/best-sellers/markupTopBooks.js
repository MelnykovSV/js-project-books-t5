export function createMarkupAllBooks(data) {
  return `<h2 class="home-title">
            Best Sellers <span class="home-title__accent">Books</span>
          </h2>
          <ul class="top-books list">${data
            .map(({ list_name, books }) => {
              return `
      <li class="top-books__item">
      <h3 class="top-books__title">${list_name}</h3>
      <ul class="books list">
        ${createMarkupBook(books)}
        </ul>
        <button class="top-books__button" type="button">See more</button>
        </li>
        `;
            })
            .join('')}</ul>`;
}
function createMarkupBook(books) {
  return books
    .map(
      ({ book_image, title, author, _id, description }) => `
  <li class="books__item list" data-id="${_id}">
    <div class="books__overlay">
    <img class="books__image" src="${book_image}" alt="book ${title}" />
    <p class="books__text--overlay">${
      description || 'Sorry, book`s description not found'
    }</p>
    </div>
    <h4 class="books__title">${title || 'Not found'}</h4>
    <p class="books__text">${author || 'Not found'}</p>
  </li>
`
    )
    .join('');
}
