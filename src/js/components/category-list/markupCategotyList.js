/* eslint-disable linebreak-style */
export function createMarkupOfCategoryList(books) {
  return books
    .map(({ list_name }) => {
      return `<li class="categories-links-list__item">
              <a href="#" class="category-link">${list_name}</a>
            </li>`;
    })
    .join('');
}
