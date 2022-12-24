import {GET_PRODUCTS, LOGIN, LOGOUT, SET_LAN} from './actions';

const initialState = {
  products: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload};
    default:
      return state;
  }
}
const initialAuthState = {
  user: {},
};
function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload};
    case LOGOUT:
      return {...state, user: {}};
    default:
      return state;
  }
}
const initialSettingState = {
  language: 'en',
};
function settingReducer(state = initialSettingState, action) {
  switch (action.type) {
    case SET_LAN:
      return {...state, language: action.payload};
    default:
      return state;
  }
}
export {authReducer, productsReducer, settingReducer};
