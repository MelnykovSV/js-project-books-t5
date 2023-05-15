import globalState from '../globalState';
import authUtils from '../firebase/firebaseAuth';

const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');
const logoutButton = document.querySelector('.user__log-out-btn');

const testButton = document.querySelector('.test-button');
const stateButton = document.querySelector('.state-button');
const authComponent = document.querySelector('.auth-component');

authUtils.authSentry();

if (localStorage.getItem('userName')) {
  authComponent.querySelector('.auth-component__user-name').textContent =
    localStorage.getItem('userName');
  console.log(localStorage.getItem('userName'));
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
if (testButton) {
  testButton.addEventListener('click', () => {
    authUtils.getUserProfile();
    authUtils.getUserStatus();
  });
}
if (stateButton) {
  stateButton.addEventListener('click', () => {
    console.log(globalState.get());
  });
}

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    authUtils.signOutUser();
  });
}
