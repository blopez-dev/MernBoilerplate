import axios from 'axios';
import actionTypes from './actionTypes';

const apiUrl = 'http://localhost:4000/products';

function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios(apiUrl);
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      products: data
    });
  };
}

export default loadProducts;
