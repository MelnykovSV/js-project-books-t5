export function createMarkupAllBooks(data) {
  return data
    .map(({ list_name, books }) => {
      return `
      <h2 class="top-books__title">${list_name}</h2>
      <ul class="books list">
        ${createMarkupBook(books)}
        </ul>
        <button class="top-books__button" type="button">See more</button>
        `;
    })
    .join('');
}
function createMarkupBook(books) {
  return books
    .map(
      ({ book_image, title, author, _id }) => `
  <li class="books__item list" data-book-id="${_id}">
    <img class="books__image" src="${book_image}" alt="book ${title}" />
    <h3 class="books__title">${
      title.length < 17 ? title : title.slice(0, 17) + '...'
    }</h3>
    <p class="books__text">${author}</p>
  </li>
`
    )
    .join('');
}
