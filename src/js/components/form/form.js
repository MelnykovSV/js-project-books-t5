import { passwordStrength } from 'check-password-strength';
import { addValidation } from './formValidation';

const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');
const passInput = document.querySelector('#sign-up-password');
const passBar = document.querySelector('.password-bar');
const passBarContainer = document.querySelector('.password-bar-container');
const passMessage = document.querySelector('.password-message');

addValidation();

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('user-form__close-button')) {
    document
      .querySelector('.backdrop-form')
      .classList.add('backdrop-form--is-hidden');
  }
});

signUpForm.addEventListener('click', e => {
  if (
    e.target.classList.contains('form-type-switch__link') &&
    !e.target.classList.contains('active')
  ) {
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
  }
});
signInForm.addEventListener('click', e => {
  if (
    e.target.classList.contains('form-type-switch__link') &&
    !e.target.classList.contains('active')
  ) {
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
  }
});

passInput.addEventListener('input', e => {
  if (!e.target.value) {
    passBarContainer.classList.add('visually-hidden');
    return;
  }
  passBarContainer.classList.remove('visually-hidden');
  passMessage.textContent = passwordStrength(e.target.value).value;

  switch (passwordStrength(e.target.value).value) {
    case 'Too weak':
      passBar.className = 'password-bar very-weak';
      break;
    case 'Weak':
      passBar.className = 'password-bar weak';
      break;
    case 'Medium':
      passBar.className = 'password-bar medium';
      break;
    case 'Strong':
      passBar.className = 'password-bar strong';
      break;
  }
});

document
  .querySelectorAll('.user-form__input')
  .forEach(input => (input.placeholder = '  '));
