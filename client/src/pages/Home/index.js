import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadProducts from '../../store/actions/actionCreators';
import ProductsList from '../../common/components/Listing/Listing';

const List = ({ products, dispatch }) => {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  return (
    <>
      <div>
        <h2>Listado de productos</h2>
        <ProductsList products={products} />
      </div>
    </>
  );
};

List.propTypes = {
  products: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(List);
