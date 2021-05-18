import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CartWrapper, List } from './style';
import ItemCart from '../ItemCart/ItemCart';
import Title from '../../../application/components/Title/Title';

const Cart = ({ cart }) => (
  <CartWrapper>
    <Title type="2" content="Cart" />
    <List>
      {cart.map((product) => (
        <ItemCart
          productImage={product.img}
          productName={product.name}
          productPrice={product.price}
        />
      ))}
    </List>
  </CartWrapper>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
