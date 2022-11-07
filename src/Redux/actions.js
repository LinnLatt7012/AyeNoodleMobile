export const GET_PRODUCTS = 'GET_PRODUCTS';
export const LOGIN = 'LOGIN';

import axios from 'axios';
import {BASE_URL} from '../config';

export const getProducts = jwt => {
  try {
    // console.log('here', jwt);
    return async dispatch => {
      const response = await axios
        .get(`${BASE_URL}/api/products`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .catch(err => {
          console.log('errrr here');
        });
      if (response.data.value) {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data.value.products,
        });
      } else {
        console.log('error', response);
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log('error');
  }
};
export const login = userData => {
  try {
    const user = JSON.stringify(userData);
    return async dispatch => {
      const response = await axios.post(`${BASE_URL}/api/users/signin`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // console.log(response.data);
      if (response.data) {
        dispatch({
          type: LOGIN,
          payload: response.data.value,
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
