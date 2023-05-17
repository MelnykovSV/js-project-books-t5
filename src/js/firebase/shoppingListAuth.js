import authUtils from '../firebase/firebaseAuth';

const logoutButtons = document.querySelectorAll('.log-out-btn');

const authComponent = document.querySelector('.auth-component');

authUtils.authSentry();

if (localStorage.getItem('userName')) {
  authComponent.querySelector('.auth-component__user-name').textContent =
    localStorage.getItem('userName');

  if (!document.body.classList.contains('is-logged')) {
    document.body.classList.add('is-logged');
  }
}

if (logoutButtons.length) {
  logoutButtons.forEach(logoutButton => {
    logoutButton.addEventListener('click', () => {
      authUtils.signOutUser();
      window.location.replace('/js-project-books-t5/index.html');
    });
  });
}
