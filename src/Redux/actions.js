export const GET_PRODUCTS = 'GET_PRODUCTS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGIN';
export const SET_LAN = 'SETTING';

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

export const Logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
      payload: {},
    });
  };
};

export const setLan = lan => {
  return dispatch => {
    dispatch({
      type: SET_LAN,
      payload: lan,
    });
  };
};
