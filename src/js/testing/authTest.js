import globalState from '../globalState';
import authUtils from '../firebase/firebaseAuth';

const authComponent = document.querySelector('.auth-component');
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

const testButton = document.querySelector('.test-button');
const stateButton = document.querySelector('.state-button');

authUtils.authSentry();

signUpForm.addEventListener('submit', authUtils.signUp);
signInForm.addEventListener('submit', authUtils.signIn);
authComponent.addEventListener('click', e => {
  if (e.target.classList.contains('auth-component__sign-out-button')) {
    authUtils.signOutUser();
  }
  if (e.target.classList.contains('auth-component__sign-up-button')) {
    signUpForm.classList.remove('visually-hidden');
  }
  if (e.target.classList.contains('auth-component__sign-in-button')) {
    signInForm.classList.remove('visually-hidden');
  }
});

testButton.addEventListener('click', () => {
  authUtils.getUserProfile();
});
stateButton.addEventListener('click', () => {
  console.log(globalState.get());
});

const stateManipulator = document.querySelector('.state-manipulator');

stateManipulator.addEventListener('click', e => {
  switch (e.target.className) {
    case 'add-to-shopping-list':
      globalState.setShoppingList([
        ...globalState.shoppingList(),
        {
          title: 'some title',
          text: 'some text',
        },
      ]);

      break;
    case 'remove-from-shopping-list': {
      const newState = globalState.shoppingList();
      newState.pop();
      globalState.setShoppingList(newState);
      break;
    }

    case 'remove-from-read': {
      const newState1 = globalState.read();
      newState1.pop();
      globalState.setRead(newState1);
      break;
    }
    case 'light-theme':
      globalState.setTheme('light');
      break;
    case 'dark-theme':
      globalState.setTheme('dark');
      break;
  }
});

stateManipulator.addEventListener('submit', e => {
  e.preventDefault();
  switch (e.target.className) {
    case 'update-form-name':
      console.log(e.target.elements.name.value);
      authUtils.updateUserName(e.target.elements.name.value);
      break;
  }
  switch (e.target.className) {
    case 'update-form-email':
      console.log(e.target.elements.email.value);
      authUtils.updateUserEmail(e.target.elements.email.value);
      break;
  }
  switch (e.target.className) {
    case 'update-form-password':
      console.log(e.target.elements.password.value);
      authUtils.updateUserPassword(e.target.elements.password.value);
      break;
  }
});
