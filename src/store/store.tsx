import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['homeData'],
};

const middleWares = [thunk];

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

let persistor = persistStore(store);

export {store, persistor};
