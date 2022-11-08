import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {authReducer, productsReducer} from './reducers';

const persistProductsConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products'],
};
const persistAuthConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const rootReducer = combineReducers({
  products: persistReducer(persistProductsConfig, productsReducer),
  auth: persistReducer(persistAuthConfig, authReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
