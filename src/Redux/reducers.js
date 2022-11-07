import {GET_PRODUCTS, LOGIN} from './actions';

const initialState = {
  products: [],
  user: {},
};

function produtsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload};
    case LOGIN:
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default produtsReducer;
