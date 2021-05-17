import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { List, ItemList } from './style';
import ProductCard from '../ProductCard/ProductCard';
import { addToCart, loadProducts } from '../../../store/actions/actionCreators';

const ProductsList = ({ products, dispatch }) => {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);
  return (
    <>
      <List>
        {
          products.map((product) => (
            <ItemList key={product._id}>
              <ProductCard
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
              />
              <button
                type="button"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </button>
            </ItemList>
          ))
        }
      </List>
    </>
  );
};
ProductsList.propTypes = {
  products: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps)(ProductsList);
