import axios from 'axios';

import {apiUri, baseURL} from './apiEndPoints';
import {persistor, store} from '../store';
import {ActionType} from '../store/login/actions-types';
import {navigationRef} from '../navigation/RootNavigation';
import {CommonActions} from '@react-navigation/native';
import navigationStrings from '../constant/navigationStrings';

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.response.use(
  async (response: any) => {
    console.log('Resoin', response.data.status);
    if (response.data.status === '400') {
      await clearAll();
      store.dispatch({
        type: ActionType.LOGIN_AUTHENTICATION,
        payload: false,
      });
      navigationRef.current.dispatch(
        CommonActions.navigate({
          name: navigationStrings.LOGIN,
        }),
      );
    }
    return response;
  },
  async (error: any) => {
    console.log('ERRRORRR  ===>  ', error);
    if (error.response.status === '400') {
      store.dispatch({
        type: ActionType.LOGIN_INIT,
      });
      persistor.purge().then(async () => {
        await clearAll();
        store.dispatch({
          type: ActionType.LOGIN_AUTHENTICATION,
          payload: false,
        });

        navigationRef.current.dispatch(
          CommonActions.navigate({
            name: navigationStrings.LOGIN,
          }),
        );
      });
    }
    return Promise.reject(error.response);
  },
);

export default instance;
function clearAll() {
  throw new Error('Function not implemented.');
}
