import {GET_PRODUCTS, LOGIN} from './actions';

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
    default:
      return state;
  }
}
export {authReducer, productsReducer};
