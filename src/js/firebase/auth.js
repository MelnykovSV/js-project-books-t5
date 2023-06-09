import authUtils from '../firebase/firebaseAuth';
import { initialCartCounter } from '../components/header/cartNumber';

const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');
const logoutButtons = document.querySelectorAll('.log-out-btn');

const authComponent = document.querySelector('.auth-component');

authUtils.authSentry();

if (localStorage.getItem('userName')) {
  authComponent.querySelector('.auth-component__user-name').textContent =
    localStorage.getItem('userName');

  initialCartCounter();

  if (!document.body.classList.contains('is-logged')) {
    document.body.classList.add('is-logged');
  }
}

if (signUpForm) {
  signUpForm.addEventListener('submit', authUtils.signUp);
}
if (signInForm) {
  signInForm.addEventListener('submit', authUtils.signIn);
}

if (logoutButtons.length) {
  logoutButtons.forEach(logoutButton => {
    logoutButton.addEventListener('click', () => {
      authUtils.signOutUser();
    });
  });
}
