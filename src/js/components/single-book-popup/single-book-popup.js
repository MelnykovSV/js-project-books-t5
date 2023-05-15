// import { remove } from 'toastr';
import { fetchSingleBook } from '../../api';
import authUtils from '../../firebase/firebaseAuth';
import globalState from '../../globalState';

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

const bookModal = document.querySelector('.book-modal');

const popUpButtonContainer = document.querySelector('.pop-up-button-container');

let currentBook;

closeButton.addEventListener('click', () => {
  backdrop.classList.add('hidden');
  document.body.style.overflow = '';
});

bookModal.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('book__add-btn')) {
    globalState.setShoppingList([...globalState.shoppingList(), currentBook]);
    console.log('book added');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  } else if (e.target.classList.contains('book__remove-btn')) {
    globalState.setShoppingList(
      globalState.shoppingList().filter(item => {
        return item._id !== currentBook._id;
      })
    );
    console.log('book removed');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

function closeModal(e) {
  if (e.code === 'Escape' || e.target.classList.contains('book-backdrop')) {
    document.removeEventListener('keydown', closeModal);
    backdrop.removeEventListener('click', closeModal);
    console.log('1234');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

export async function showSingleBookPopUp(e) {
  if (
    e.target.classList.contains('books__item') ||
    e.target.classList.contains('category__item')
  ) {
    const { data } = await fetchSingleBook(e.target.dataset.id);
    const markup = createPopUpMarkup(data);
    bookPopUpCard.innerHTML = markup;
    const {
      _id,
      list_name,
      author,
      book_image,
      description,
      title,
      buy_links,
    } = data;
    console.log(data);

    currentBook = {
      _id,
      // eslint-disable-next-line quotes
      list_name: list_name ? list_name : "Sorry, we lost this book's ganre.",
      // eslint-disable-next-line quotes
      author: author ? author : "Sorry, we lost this book's author.",
      book_image,
      description: description
        ? description
        : // eslint-disable-next-line quotes
          "Sorry, we lost this book's description.",
      // eslint-disable-next-line quotes
      title: title ? title : "Sorry, we lost this book's title.",
      amazonUrl: buy_links[0].url,
      appleUrl: buy_links[1].url,
      bookShopUrl: buy_links[4].url,
    };

    popUpButtonContainer.innerHTML = chooseMarkup(data._id);

    document.addEventListener('keydown', closeModal);
    backdrop.addEventListener('click', closeModal);
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
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
      <ul class="book__sales--link-list">
        <li>
          <a href="${
            buy_links[0].url
          }" aria-label="Amazon" target="_blank" rel="noopener noreferrer nofollow">
            <img class = "book__sales-icon amazon" width="62" height="19" srcset="${imageAmazon} 1x, ${imageAmazon2x} 2x" src="${imageAmazon}" alt="Amazon" />
          </a>
        </li>
        <li>
          <a href="${
            buy_links[1].url
          }" aria-label="Apple books" target="_blank" rel="noopener noreferrer nofollow">
            <img class = "book__sales-icon" width="33" height="32" srcset="${imageAppleBook} 1x, ${imageAppleBook2x} 2x" src="${imageAppleBook}" alt="Apple Books" />
          </a>
        </li>
        <li>
          <a href="${
            buy_links[4].url
          }" aria-label="Bookshop" target="_blank" rel="noopener noreferrer nofollow">
            <img class = "book__sales-icon" width="38" height="36" srcset="${imageBookShop} 1x, ${imageBookShop2x} 2x" src="${imageBookShop}" alt="Bookshop" />
          </a>
        </li>
      </ul>
    </div>
  `;
}

function createButtonMarkupAdd(id) {
  return `<a class="book__add-remove-link" href="#"><button class="book__add-remove-btn book__add-btn js-add-remove" data-id=${id}>Add to shopping list</button></a>`;
}
function createButtonMarkupRemove(id) {
  return `<a class="book__add-remove-link" href="#"><button class="book__add-remove-btn book__remove-btn js-add-remove" data-id=${id}>Remove from shopping list</button></a><div><p class="greetings hidden2">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”. </p></div>`;
}
function createButtonMarkupAuthorize() {
  return '<div><p class="greetings hidden2">To enhance your shopping experience, we have introduced a new feature allowing you to add books directly to your shopping list on our website. However, you need to authorize your account to access this functionality.  </p></div>';
}

function chooseMarkup(id) {
  if (authUtils.getUserStatus()) {
    const searchResult = globalState.shoppingList().find(item => {
      return item._id === id;
    });
    if (searchResult) {
      return createButtonMarkupRemove(id);
    } else {
      return createButtonMarkupAdd(id);
    }
  } else {
    return createButtonMarkupAuthorize();
  }
}

// authUtils.getCurrentUserId().then(data => console.log(data));

rootElement.addEventListener('click', showSingleBookPopUp);
