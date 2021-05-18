import axios from 'axios';
import actionTypes from './actionTypes';

const apiUrl = 'http://localhost:4000/products';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios(apiUrl);
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      products: data
    });
  };
}

export function addToCart(product) {
  return {
    type: actionTypes.ADD_TO_CART,
    data: product
  };
}
