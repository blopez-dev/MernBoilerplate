import React from 'react';
import { List, ItemList } from './style';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ products }) => (
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
        </ItemList>
      ))
    }
  </List>
);

export default ProductsList;
