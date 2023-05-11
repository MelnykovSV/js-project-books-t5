import { getDatabase, ref, set, get } from 'firebase/database';
import globalState from '../globalState';
import authUtils from './firebaseAuth';
import { INITIAL_STATE_VALUE } from '../../constants';
import { notification } from '../utils/notifications';
import { app } from './firebaseApp';

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

class FirebaseDatabase {
  writeUserData() {
    const userId = authUtils.getCurrentUserId();
    const data = globalState.get();

    set(ref(db, 'users/' + userId), data);
  }

  async getUserData() {
    const userId = authUtils.getCurrentUserId();

    const data = await get(ref(db, 'users/' + userId))
      .then(snapshot => {
        if (snapshot.exists()) {
          const result = {
            ...INITIAL_STATE_VALUE,
            ...snapshot.val(),
          };
          return result;
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        notification.error(
          [error.code, error.message],
          'Sorry, unexpected error occured'
        );
      });
    return data;
  }
}

const databaseUtils = new FirebaseDatabase();

export default databaseUtils;
