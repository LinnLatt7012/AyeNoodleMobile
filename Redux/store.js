import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import produtsReducer from './reducers';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products', 'user'],
};
const rootReducer = combineReducers({
  produtsReducer: persistReducer(persistConfig, produtsReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
