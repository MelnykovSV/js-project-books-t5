import globalState from '../globalState';
import authUtils from '../firebase/firebaseAuth';

const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');
const logoutButton = document.querySelector('.user__log-out-btn');

const testButton = document.querySelector('.test-button');
const stateButton = document.querySelector('.state-button');

authUtils.authSentry();

signUpForm.addEventListener('submit', authUtils.signUp);
signInForm.addEventListener('submit', authUtils.signIn);

testButton.addEventListener('click', () => {
  authUtils.getUserProfile();
});
stateButton.addEventListener('click', () => {
  console.log(globalState.get());
});
logoutButton.addEventListener('click', () => {
  authUtils.signOutUser();
});
