import globalState from '../globalState';
import {
  initialCartCounter,
  closingCartCounter,
} from '../components/header/cartNumber';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
} from 'firebase/auth';

import databaseUtils from './firebaseDatabase';
import { INITIAL_STATE_VALUE } from '../../constants';
import { notification } from '../utils/notifications';

import { app } from './firebaseApp';
import { initialShoppingList } from '../components/shopping-list/pagination';
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');
const passBar = document.querySelector('.password-bar-container');

//create user

const auth = getAuth(app);

const authComponent = document.querySelector('.auth-component');

const shoppingListLoader = document.querySelector('.shopping-list__loader');

let userStatus = false;

class FirebaseAuth {
  signUp = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (
      name.length < 3 ||
      name.length > 20 ||
      !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) ||
      !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)
    ) {
      return;
    }
    if (email && password.length >= 6) {
      authComponent.classList.remove('signed-out');

      createUserWithEmailAndPassword(auth, email, password, name)
        .then(async () => {
          this.updateUserName(name);
          //new
          localStorage.setItem('userName', name);

          document
            .querySelector('.backdrop-form')
            .classList.add('backdrop-form--is-hidden');
          e.target.reset();
          document.body.classList.remove('body-lock');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            notification.error(
              'This email is taken by another user. Please use another email',
              'Email is already in use'
            );
          } else {
            notification.error(
              [error.code, error.message],
              'Sorry, unexpected error occured'
            );
          }

          authComponent.classList.add('signed-out');
        })
        .finally(() => {
          signInForm.reset();
          passBar.classList.add('visually-hidden');
        });
    }
  };

  signIn = e => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email === '' || password === '') {
      return;
    }
    if (email && password.length >= 6) {
      authComponent.classList.remove('signed-out');

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;

          localStorage.setItem('userName', user.displayName);
          document
            .querySelector('.backdrop-form')
            .classList.add('backdrop-form--is-hidden');
          e.target.reset();
          document.body.classList.remove('body-lock');
        })
        .catch(error => {
          if (
            error.code === 'auth/user-not-found' ||
            error.code === 'auth/wrong-password'
          ) {
            notification.error(
              // eslint-disable-next-line quotes
              "Your login credentials don't match an account in our system ",
              'Wrong email or password'
            );
          } else if (error.code === 'auth/too-many-requests') {
            notification.error(
              // eslint-disable-next-line quotes
              'Too many unsuccessful tries. You can try to sign in later. ',
              'Too many requests'
            );
          } else {
            notification.error(
              [error.code, error.message],
              'Sorry, unexpected error occured'
            );
          }
        })
        .finally(() => {
          signUpForm.reset();
          passBar.classList.add('visually-hidden');
          // e.target.classList.add('visually-hidden');
          // userStatus = true;
        });
    }
  };

  signOutUser = () => {
    document.body.classList.remove('is-logged');
    signOut(auth)
      .then(() => {
        document
          .querySelector('.js-user')
          .classList.remove('user--is-active-btns-box');
        localStorage.removeItem('userName');
      })
      .catch(error => {
        // An error happened.
        document.body.classList.add('is-logged');
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
      })
      .finally(() => {
        // userStatus = false;
      });
  };

  //Procs every time when user status changes. Sets global state object depending on this status (from localstorage of firebase realtime database)

  authSentry = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        localStorage.setItem('userName', user.displayName);
        userStatus = true;
        databaseUtils.getUserData().then(data => {
          if (data) {
            globalState.set(data);

            localStorage.setItem('userData', JSON.stringify(data));

            if (shoppingListLoader) {
              shoppingListLoader.style.display = 'none';
            }

            initialShoppingList();
            initialCartCounter();
          } else {
            globalState.set(INITIAL_STATE_VALUE);
          }
        });

        const nameLabels = document.querySelectorAll('.user__name');

        nameLabels.forEach(item => {
          item.textContent = `${user.displayName}`;
        });

        if (!document.body.classList.contains('is-logged')) {
          document.body.classList.add('is-logged');
        }
      } else {
        // User is signed out
        userStatus = false;
        localStorage.removeItem('userData');
        if (localStorage.getItem('globalState')) {
          globalState.set(JSON.parse(localStorage.getItem('globalState')));
        } else {
          globalState.set(INITIAL_STATE_VALUE);
          globalState.writeToLocalStorage();
        }

        authComponent.classList.add('signed-out');
        closingCartCounter();
      }
    });
  };

  isAuthenticated = () => {
    return new Promise(resolve => {
      onAuthStateChanged(auth, user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  getCurrentUserId = () => {
    const user = auth.currentUser;
    if (user !== null) {
      return user.uid;
    }
  };

  updateUserName = name => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        // Profile updated!
        this.updateUserInterface(name);
        // ...
      })
      .catch(error => {
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
        // An error occurred
        // ...
      });
  };

  updateUserEmail = email => {
    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        console.log('email updated');
        console.log(`Your new email is: ${email}`);
        // ...
      })
      .catch(error => {
        // An error occurred
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
        // ...
      });
  };
  updateUserPassword = password => {
    updatePassword(auth.currentUser, password)
      .then(() => {
        // Email updated!
        console.log('password updated');
        console.log(`Your new password is: ${password}`);
        // ...
      })
      .catch(error => {
        // An error occurred
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
        // ...
      });
  };

  getUserProfile = () => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.

      return user;
    }
  };

  updateUserInterface = name => {
    authComponent.querySelector(
      '.auth-component__user-name'
    ).textContent = `${name}`;
  };

  getUserStatus = () => {
    return userStatus;
  };
}

const authUtils = new FirebaseAuth();

export default authUtils;
