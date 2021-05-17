import actionTypes from '../actions/actionTypes';

function reducer(cart = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...cart, action.data];
    default:
      return cart;
  }
}

export default reducer;
