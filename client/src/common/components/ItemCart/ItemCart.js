import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ItemSingleCart, RowInSingleCart, ColImageProduct, ColNameProduct, ColPriceProduct } from './style';

const ItemCart = ({ productImage, productName, productPrice }) => (
  <ItemSingleCart>
    <RowInSingleCart>
      <ColImageProduct><img src={productImage} alt={productName} /></ColImageProduct>
      <ColNameProduct><p>{productName}</p></ColNameProduct>
      <ColPriceProduct><span>{productPrice}</span></ColPriceProduct>
    </RowInSingleCart>
  </ItemSingleCart>
);

ItemCart.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(ItemCart);
