export const GET_PRODUCTS = 'GET_PRODUCTS';
export const LOGIN = 'LOGIN';

import axios from 'axios';
import {BASE_URL} from '../config';
export const getProducts = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${BASE_URL}/api/products`);
      if (response.data.value) {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data.value.products,
        });
      } else {
        console.log(response);
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log('error');
  }
};
export const login = userData => dispatch => {
  try {
    return async dispatch => {
      const response = await axios.get(`${BASE_URL}/api/users/signin`);
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
