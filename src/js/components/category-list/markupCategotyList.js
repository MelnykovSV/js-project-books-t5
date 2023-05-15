/* eslint-disable linebreak-style */
export function createMarkupOfCategoryList(books) {
  return books
    .map(({ list_name }) => {
      const attributeValue = list_name.split(' ').join('');

      return `<li class="categories-links-list__item">
              <a href="#" class="category-link" data-category=${attributeValue}>${list_name}</a>
            </li>`;
    })
    .join('');
}
