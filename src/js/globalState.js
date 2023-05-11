import databaseUtils from './firebase/firebaseDatabase';
import authUtils from './firebase/firebaseAuth';
import { INITIAL_STATE_VALUE } from '../constants';

let globalStateObject = JSON.parse(JSON.stringify(INITIAL_STATE_VALUE));

class StateUtility {
  get() {
    return globalStateObject;
  }

  set(value) {
    globalStateObject = JSON.parse(JSON.stringify(value));
    this.saveData();
  }

  shoppingList() {
    return globalStateObject.shoppingList;
  }

  theme() {
    return globalStateObject.read;
  }

  setShoppingList(value) {
    globalStateObject.shoppingList = [...value];
    this.saveData();
  }

  setTheme(value) {
    globalStateObject.theme = value;
    this.saveData();
  }

  writeToLocalStorage() {
    localStorage.setItem('globalState', JSON.stringify(globalStateObject));
  }

  async saveData() {
    const status = await authUtils.isAuthenticated();
    if (status) {
      databaseUtils.writeUserData();
    } else this.writeToLocalStorage();
  }
}

let globalState = Object.freeze(new StateUtility());
export default globalState;
