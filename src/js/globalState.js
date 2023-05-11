import databaseUtils from './firebase/firebaseDatabase';
import authUtils from './firebase/firebaseAuth';
import { INITIAL_STATE_VALUE } from '../constants';

let globalStateObject = JSON.parse(JSON.stringify(INITIAL_STATE_VALUE));

class StateUtility {
  //Returns global state object
  get() {
    return globalStateObject;
  }

  //Sets global state object
  set(value) {
    globalStateObject = JSON.parse(JSON.stringify(value));
    this.saveData();
  }

  //Returns shoppingList value (has to be an array of objects or empty array)
  shoppingList() {
    return globalStateObject.shoppingList;
  }

  //Returns theme value ('light'||'dark')

  theme() {
    return globalStateObject.read;
  }

  //Sets shoppingList value. Requires a single argument (array of objects or empty array)
  setShoppingList(value) {
    globalStateObject.shoppingList = [...value];
    this.saveData();
  }

  //Sets shoppingList value. Requires a single argument ('light'||'dark')
  setTheme(value) {
    globalStateObject.theme = value;
    this.saveData();
  }

  //Writes global state object to local storage
  writeToLocalStorage() {
    localStorage.setItem('globalState', JSON.stringify(globalStateObject));
  }

  //Saves global state object to local storage or to firebase realtime database depending on user status (loged in or not)
  async saveData() {
    const status = await authUtils.isAuthenticated();
    if (status) {
      databaseUtils.writeUserData();
    } else this.writeToLocalStorage();
  }
}

let globalState = Object.freeze(new StateUtility());
export default globalState;