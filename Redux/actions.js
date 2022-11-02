export const GET_PRODUCTS = 'GET_PRODUCTS';
export const LOGIN = 'LOGIN';

import axios from 'axios';

export const getProducts = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${BASE_URL}/api/products`);
      if (response.value) {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.values,
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log('error');
  }
};
export const login = userData => dispatch => {
  dispatch({
    type: LOGIN,
    payload: stock,
  });
};
