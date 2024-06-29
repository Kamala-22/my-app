import React from 'react';
import './ProductCard.css';

const ProductItem = ({ product }) => {
  return (
    <div className="productitem">
      <a href={`details.html?id=${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <p>Price Rs ₹{product.price} | {product.rating}</p>
        <p>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <p>Rating: {product.rating}</p>
        <h3>{product.title}</h3>
      </a>
    </div>
  );
};

export default ProductItem;
