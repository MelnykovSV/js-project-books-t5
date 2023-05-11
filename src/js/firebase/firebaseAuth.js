import globalState from '../globalState';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import databaseUtils from './firebaseDatabase';
import { INITIAL_STATE_VALUE } from '../../constants';
import { notification } from '../utils/notifications';

import { app } from './firebaseApp';

//create user

const auth = getAuth(app);

const authComponent = document.querySelector('.auth-component');

class FirebaseAuth {
  signUp(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (email && password.length >= 6) {
      authComponent.classList.remove('signed-out');

      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch(error => {
          notification.error(
            [error.code, error.message],
            'Sorry, unexpected error occured'
          );

          authComponent.classList.add('signed-out');
        })
        .finally(() => {
          e.target.classList.add('visually-hidden');
        });
    }
  }

  signIn(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    if (email && password.length >= 6) {
      authComponent.classList.remove('signed-out');

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch(error => {
          notification.error(
            [error.code, error.message],
            'Sorry, unexpected error occured'
          );
        })
        .finally(() => {
          e.target.classList.add('visually-hidden');
        });
    }
  }

  signOutUser() {
    authComponent.classList.remove('signed-in');
    signOut(auth)
      .then(() => {})
      .catch(error => {
        // An error happened.
        authComponent.classList.add('signed-in');
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
      });
  }

  authSentry() {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        databaseUtils.getUserData().then(data => {
          if (data) {
            globalState.set(data);
          } else {
            globalState.set(INITIAL_STATE_VALUE);
          }
        });
        authComponent.querySelector(
          '.auth-component__user-email'
        ).textContent = `${user.email}`;

        authComponent.classList.add('signed-in');
      } else {
        // User is signed out
        if (localStorage.getItem('globalState')) {
          globalState.set(JSON.parse(localStorage.getItem('globalState')));
        } else {
          globalState.set(INITIAL_STATE_VALUE);
          globalState.writeToLocalStorage();
        }

        authComponent.classList.add('signed-out');
      }
    });
  }

  isAuthenticated() {
    return new Promise(resolve => {
      onAuthStateChanged(auth, user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  getCurrentUserId() {
    const user = auth.currentUser;
    if (user !== null) {
      return user.uid;
    }
  }
}

const authUtils = new FirebaseAuth();

export default authUtils;
